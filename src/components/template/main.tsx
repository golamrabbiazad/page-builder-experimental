export function Main() {
  return (
    <main className="w-full">
      <section className="text-[#536136] relative">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="office-slider"
          className="object-cover"
        />
        <div className="max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="uppercase text-xl font-medium">Gift Guide</h2>
          <h1 className="text-6xl font-bold tracking-tighter pb-2">
            Here's to Joy
          </h1>
          <p className="pb-4">
            There are many variations of passages of Lorem ipsum available, but
            the majority have suffered altertion in some form, by injected
            humour.
          </p>
          <button className="bg-[#536136] text-white p-2 w-1/3 rounded-md">
            Shop Gifts
          </button>
        </div>
      </section>
    </main>
  );
}
