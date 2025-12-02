import Welcome from "../../../markdown/welcome.mdx";

export default function Page() {
  return (
    <section className="bg-primary text-white">
      <div className="container space-y-6 pt-10! ">
        <h1 className="text-center text-6xl font-bold">Ерөнхий үйлчилгээний нөхцөл</h1>
        <Welcome />
      </div>
    </section>
  );
}
