# Todo

All work(bugs, fixes, features) for this page builder.

## Priority

- ~~feat: if saved data already is there then load the data otherwise show the greeting page.~~
- **bug: canvas should be scrollable to the viewport when dragging to the bottom.**
- bug: insert Data **not removed, for ex, (layout-1)** when layout rendered from the server.
- **feat: news layout data can't be editable.**
- feat: news layouts can't be editable but basic element are editable.
- fix: double click to insert image not works because of the server can't store the image rtn. This may works if we can interact with real db.
- fix: canvas content must in the middle.

## Bugs

- ~~bug: initial display get empty that means doesn't show canvas.~~
- bug: click body element in the layer panel takes full page to zoom, and can't show the topbar buttons.
- bug: after section added to the layout the id of the section can't be changed.

## Enhance

- ~~fix: asset manager design and functionality.~~
- fix: style manager's classes panel, this could be default panel.
- ~~fix: after clicking the content the right side panel content editable window opens.~~

## Featuers

- ~~feat: data stored in local db~~
- ~~feat: load raw html from server to the editor~~
- ~~feat: basic tailwind layout~~
- ~~feat: dynamic data fill up based on the category when layout selected.~~
- ~~feat: dynamic data for example, fill up data based on category. Ex, `crimes, sports, politics, etc.`~~
- ~~feat: click save button to post request to the API.~~
- ~~feat: custom save button for save the project in the db.~~
- ~~feat: all images are show in the asset manager preview panel.~~
- ~~feat: toast shows when user hit the save button.~~
- feat: custom layout, for example `grid` layout.
- feat: form elements from figma to add.
- feat: custom google ads banner.
- feat: add more layouts.
- refactor: refactor layouts.
- feat: extends the storage strategy, <https://grapesjs.com/docs/modules/Storage.html#extend-storage>. for example, if user don't have internet conection then it saves locally the later if internet connection is back hit save to push to the server.
- feat: heading plugin where default heading is h1, and later it can be changed to h2, h3, h4, h5, h6

## Fake API

```json
"categories": [
    {
      "id": "1",
      "name": "দেশের খবর",
      "news": [
        {
          "title": "নৌকা ও ঈগল ঘিরে বিভক্ত আওয়ামী লীগ, সমানতালে চলছে প্রচারণা",
          "subtitle": "কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ",
          "subtitle": "কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ",
          "subtitle": "কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ",
          "subtitle": "কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "দেশের সর্বনিম্ন তাপমাত্রা আজ সৈয়দপুরে, চলছে মৃদু শৈত্যপ্রবাহ",
          "subtitle": "কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে কক্সবাজার-৩ সংসদীয় আসন। দশম ও একাদশ সংসদ নির্বাচনে এ আসনে আওয়ামী লীগের সাইমুম সরওয়ার কমল সংসদ সদস্য নির্বাচিত হয়েছেন।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        }
      ]
    },
    {
      "id": "2",
      "name": "শীর্ষ খবর",
      "news": [
        {
          "title": "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
          "subtitle": "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতে পারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "ফরিদপুর-৩: শামীমের প্রার্থিতার বিরুদ্ধে এ কে আজাদের আবেদনের শুনানি",
          "subtitle": "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতে পারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "কলাবাগান মাঠে আওয়ামী লীগের নির্বাচনী জনসভায় বক্তব্য চলছে",
          "subtitle": "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতে পারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "ভোট দিয়ে অগ্নিসন্ত্রাসের উপযুক্ত জবাব দিন: প্রধানমন্ত্রী শেখ হাসিনা",
          "subtitle": "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতে পারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        },
        {
          "title": "গাজীপুরে প্রার্থী না হয়েও নৌকার জাহিদের ‘প্রতিদ্বন্দ্বী’ জাহাঙ্গীর",
          "subtitle": "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতে পারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
          "image": "https://images.unsplash.com/photo-1704689941627-baac4b423411?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "published_date": "ডিসেম্বর ২৭,২০২৩"
        }
      ]
    }
  ],
```
