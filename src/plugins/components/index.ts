import { Editor } from "grapesjs";

const desher_khobor_content = `
<section id="desher-khobor">
  <h2 class="ml-2 text-3xl font-bold">দেশের খবর</h2>
  <div class="grid-col-1 grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-2">
    <div class="mb-4">
      <img
        src="https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650
    &auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="object-cover"
      />
      <h2 class="mt-2 text-xl font-bold">নৌকা ও ঈগল ঘিরে বিভক্ত আওয়ামী লীগ, সমানতালে চলছে প্রচারণা</h2>
      <p class="text-md">কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।</p>
      <p class="mt-2 text-sm">ডিসেম্বর ২৭,২০২৩</p>
    </div>

    <div class="grid justify-center gap-2 space-y-2 md:grid-cols-2">
      <div class="min-h-min">
        <img src="https://images.unsplash.com/photo-1704732510471-5a99789c6123?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1704732510471-5a99789c6123?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1704732510471-5a99789c6123?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1704732510471-5a99789c6123?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ</p>
      </div>
    </div>
  </div>
</section>
`;

export function ComponentPlugin(editor: Editor) {
  editor.Blocks.add("desher-khobor", {
    label: "দেশের খবর",
    content: desher_khobor_content,
    media: "🤨",
    category: "খবর",
    attributes: {
      "data-gjs-editable": false,
      "data-gjs-removable": false,
    },
  });

  editor.DomComponents.addType("desher-khobor", {
    isComponent: (el) => el.id === "desher-khobor",

    model: {
      defaults: {
        attributes: {
          "data-gjs-editable": false,
          "data-gjs-removable": false,
        },
      },
    },
  });
}
