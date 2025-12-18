import { Suspense } from 'react'

import QuantityButton from '@/components/features/quantity-button'
import PageLoader from '@/components/shared/page-loader'
import Suggestion from '@/components/shared/suggestion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

const queryProductBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    depth: 3,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug
          }
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }])
      ]
    }
  })

  return result.docs?.[0] || null
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = await params

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products',
    where: {}
  })

  // const product = p.docs.find((p) => p.id === Number(slug))

  // TODO:
  const product = result.docs[0]
  console.log(product)
  if (!product) return <div>Product not found</div>

  return (
    <Suspense fallback={<PageLoader />}>
      <section className="mx-auto max-w-lg md:max-w-[1440px] py-10 px-6 md:px-[38px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-14 md:gap-14 pb-10">
          <div className="col-span-1 w-full lg:col-span-2">
            {/* <Gallery images={product.images} /> */}
          </div>
          <div className="col-span-1 lg:col-span-3 space-y-6 ">
            <div className="space-y-3">
              <h1 className="text-4xl xl:text-6xl font-bold">
                {product.title}
              </h1>
              <h1 className="text-brand-orange text-4xl font-bold">
                {product.price?.toLocaleString()}₮
              </h1>
            </div>
            <Separator className="bg-accent" />

            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="font-bold mb-3 sm:text-2xl text-tertiary">
                  Хэмжээ
                </h1>
                <div className="flex items-center gap-4">
                  {/* <SelectSize size={product.weight} /> */}
                </div>
              </div>
              <div className="w-fit">
                <QuantityButton variant="ghost" />
              </div>
            </div>
            <Separator className="bg-accent" />

            <div className="text-tertiary font-medium text-lg gap-3">
              <h2 className="font-bold mb-3 sm:text-2xl">Тайлбар:</h2>
              <h2> Төрөл: {product.category} </h2>
              <p className="mt-3">{product.description}</p>
            </div>
            <Accordion collapsible type="single">
              <AccordionItem
                className="border-b! border-primary/10"
                value="item-1"
              >
                <AccordionTrigger className="md:text-2xl text-tertiary font-bold">
                  The tasting notes
                </AccordionTrigger>
                <AccordionContent className="text-lg text-tertiary">
                  <p>
                    Өдөр тутмын хэрэглээний виски гэгддэг тул амт нь уухад
                    хялбар сүүн шоколад, улаан алим, ваниль зэрэгийг төгс
                    зохицлоосон амттай
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-b! border-primary/10"
                value="item-2"
              >
                <AccordionTrigger className="md:text-2xl text-tertiary font-bold">
                  How to enjoy
                </AccordionTrigger>
                <AccordionContent className="text-lg text-tertiary">
                  <p>
                    Өдөр тутмын хэрэглээний виски гэгддэг тул амт нь уухад
                    хялбар сүүн шоколад, улаан алим, ваниль зэрэгийг төгс
                    зохицлоосон амттай
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Suggestion />
      </section>
    </Suspense>
  )
}
