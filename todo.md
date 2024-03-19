# Todo

All work(bugs, fixes, features) for this page builder.

## News Portal Admin

- perf: Admin Dashboard super fast, previous admin dashboard rendered time 22s, now ~1.1 - 1.7s (Huge perfomance wins)
- perf: navigate links between pages instant (Huge UX)
- feat: dashboard, categories, topics, reporters, admin pages with typesafe codebase and UI.
- searchbar.
- ...bug fixes

- fix: responsive dashboard mobile menu (todo)

- suggestion: fonts and sizes which is in the newsportal folder.

## Priorities

- fix image upload locally.
- temporary remove online store, implement offline storage.
- implement radix UI and tailwindCSS.
- row block and add sections is same layout.
- after blocks dropped customize menu should open.
- for heading block, default text heading, and can changeable to heading type for ex, h1, h2, h3, h4, h5.

- customize existing layout stucture.

- feat: add text alignment to position of that text.
- fix: double click to insert image not works because of the server can't store the image rtn. This may works if we can interact with real db.
- fix: hide default eye button.
- feat: workable `Rich Text Editor` functionality.
- feat: select on component right side panel pops up.
- feat: implement <https://platejs.org/> RTE for the text Editor.
- fix: discard button
- implement tooltip (ex, shows bigger images of layout) on templates when mouse hover on them.
- fix: image import issue for `@/app/page-builder/lib/plugins/category/assets/index.ts`
- <https://github.com/GrapesJS/grapesjs/issues/3399>
- <https://github.com/GrapesJS/grapesjs/discussions/3672>

## Bugs

- bug: after section added to the layout the id of the section can't be changed.
- bug: when we're in the preview-mode, contents are still now editable.

- ~~bug: initial display get empty that means doesn't show canvas.~~
- ~~bug: click body element in the layer panel takes full page to zoom, and can't show the topbar buttons.~~
- ~~bug: canvas should be scrollable to the viewport when dragging to the bottom.~~
- ~~bug: insert Data **not removed, for ex, (layout-1)** when layout rendered from the server.~~
- ~~bug: append data can't exported into HTML.~~

## Enhancements

- fix: when a component is selected and switch to another tab (content) the state gets lost.
- fix: style manager's classes panel, this could be default panel.

- ~~fix: asset manager design and functionality.~~
- ~~fix: after clicking the content the right side panel content editable window opens.~~
- ~~fix: category name will be basic block and layout is going to dynamic content.~~

## Features

- feat: heading plugin where default heading is h1, and later it can be changed to h2, h3, h4, h5, h6
- context menu for various option for example, delete, save, copy, cut etc in the canvas.
- feat: custom layout, for example `grid` layout.
- feat: form elements from figma to add.
- feat: custom google ads banner.
- feat: add more layouts.
- refactor: refactor layouts.
- feat: heading plugin where default heading is h1, and later it can be changed to h2, h3, h4, h5, h6
- context menu for various option for example, delete, save, copy, cut etc in the canvas.

- ~~feat: redesign the full editor (light, dark mode support.)~~
- ~~feat: data stored in local db~~
- ~~feat: load raw html from server to the editor~~
- ~~feat: basic tailwind layout~~
- ~~feat: dynamic data fill up based on the category when layout selected.~~
- ~~feat: dynamic data for example, fill up data based on category. Ex, `crimes, sports, politics, etc.`~~
- ~~feat: click save button to post request to the API.~~
- ~~feat: custom save button for save the project in the db.~~
- ~~feat: all images are show in the asset manager preview panel.~~
- ~~feat: toast shows when user hit the save button.~~
- ~~**feat: news layout data can't be editable.**~~
- ~~feat: news layouts can't be editable but basic element are editable.~~


## unique id for menus

- nanoid for categories, tags, and custom links, { id: nanoId, ...props}


https://browserinc.notion.site/Getting-Started-with-Arc-for-Windows-145ece36acbb40f381ce1817747cb7ca

https://releases.arc.net/windows/prod/Arc.appinstaller

## Arc Browser

```xml

<?xml version="1.0" encoding="utf-8"?>
<AppInstaller
    Uri="https://releases.arc.net/windows/prod/Arc.appinstaller"
    Version="0.13.1.15859" xmlns="http://schemas.microsoft.com/appx/appinstaller/2018">
    <MainPackage
        Name="TheBrowserCompany.Arc"
        Version="0.13.1.15859"
        Publisher="E=hello@thebrowser.company, CN=THE BROWSER COMPANY OF NEW YORK INC., O=THE BROWSER COMPANY OF NEW YORK INC., STREET=295 LAFAYETTE STREET, L=New York, S=New York, C=US, OID.1.3.6.1.4.1.311.60.2.1.2=Delaware, OID.1.3.6.1.4.1.311.60.2.1.3=US, SERIALNUMBER=7571542, OID.2.5.4.15=Private Organization"
        Uri="https://releases.arc.net/windows/prod/0.13.1.15859/Arc.x64.msix"
        ProcessorArchitecture="x64" />
    <Dependencies>
        <Package
            Name="Microsoft.WindowsAppRuntime.1.4"
            Publisher="CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US"
            ProcessorArchitecture="x64"
            Uri="https://releases.arc.net/windows/dependencies/x64/Microsoft.WindowsAppRuntime.1.4.4000.1136.2333.0.msix"
            Version="4000.1136.2333.0" />
        <Package
            Name="Microsoft.VCLibs.140.00.UWPDesktop"
            Publisher="CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US"
            ProcessorArchitecture="x64"

            Uri="https://releases.arc.net/windows/dependencies/x64/Microsoft.VCLibs.x64.14.00.Desktop.14.0.30704.0.appx"
            Version="14.0.30704.0" />
    </Dependencies>
</AppInstaller>

```

@common -> BlogCard

```tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { GrGallery } from "react-icons/gr";
import { IoPlay } from "react-icons/io5";
import { banglaDateFormat, excerpt } from "@/helpers/utils";

interface BlogCardProps {
  data?: any;
  classes?: {
    root?: any;
    imageWrapper?: string;
    imageStyle?: string;
    iconWrapper?: string;
    title?: string;
    icon?: string;
    data?: string;
    galleryWrapper?: string;
    icongallery?: string;
    body?: string;
    badge?: string;
    highlight?: string;
    desc?: string;
    date?: string;
    hero?: string;
    overlay?: string;
    imgiconWrapper?: string;
    imgicon?: string;
  };
  type?: string;
}
const BlogCard = ({ data, classes, type }: BlogCardProps) => {
  return (
    <>
      {type === "VIDEO" ? (
        <Link
          href={`/video-gallery/${data?.slug}`}
          className={`grid  group hover:text-inherit relative  ${
            classes?.root ? classes.root : ""
          }`}
        >
          <div
            className={` ${classes?.imageWrapper ? classes.imageWrapper : ""}`}
          >
            <Image
              src={
                data?.featuredImage || "/images/misc/image_placeholder_big.webp"
              }
              alt="Top Stories"
              width={960}
              height={540}
              className={`object-cover ${
                classes?.imageStyle ? classes.imageStyle : ""
              }`}
            />
            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.iconWrapper ? classes.iconWrapper : ``
              }`}
            >
              <IoPlay
                className={`text-white ${classes?.icon ? classes.icon : ``}`}
              />
            </div>

            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.galleryWrapper ? classes.galleryWrapper : ``
              }`}
            >
              <GrGallery
                className={`text-black ${
                  classes?.icongallery ? classes.icongallery : ``
                }`}
              />
            </div>
          </div>
          <div className={` ${classes?.body ? classes.body : ""}`}>
            <h3
              className={`line-clamp-2  group-hover:text-primary transition-all mb-[10px] ${
                classes?.title ? classes.title : ""
              }`}
            >
              {data?.highlight && (
                <span
                  className={`inline-flex items-center gap-1 pr-1 ${
                    classes?.highlight ? classes.highlight : ``
                  }`}
                >
                  <span className=" mb-0 text-primary font-medium leading-[25px]">
                    {excerpt(data?.highlight, 12)}
                  </span>
                  <GoDotFill className="text-primary text-sm" />
                </span>
              )}

              {data?.title}
            </h3>

            {data?.excerpt && (
              <p
                className={`line-clamp-4  ${
                  classes?.desc ? classes?.desc : ""
                }`}
              >
                {data?.excerpt}
              </p>
            )}

            <span
              className={`mb-0 text-[13px] ${
                classes?.date ? classes?.date : ""
              }`}
            >
              {banglaDateFormat(data?.publishedAt)}
            </span>
          </div>
          {data?.excerpt && (
            <p className={` hidden  ${classes?.hero ? classes?.hero : ""}`}>
              {data?.excerpt}
            </p>
          )}
          <div
            className={`hidden w-full h-full absolute top-0 left-0 blog_card_overlay ${
              classes?.overlay ? classes.overlay : ""
            }`}
          />
        </Link>
      ) : type === "PICTURE" ? (
        <Link
          href={`/image-gallery/${data?.slug}`}
          className={`grid  group hover:text-inherit relative  ${
            classes?.root ? classes.root : ""
          }`}
        >
          <div
            className={` ${classes?.imageWrapper ? classes.imageWrapper : ""}`}
          >
            <Image
              src={
                data?.featuredImage || "/images/misc/image_placeholder_big.webp"
              }
              alt="Top Stories"
              width={960}
              height={540}
              className={`object-cover ${
                classes?.imageStyle ? classes.imageStyle : ""
              }`}
            />
            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.iconWrapper ? classes.iconWrapper : ``
              }`}
            >
              <IoPlay
                className={`text-white ${classes?.icon ? classes.icon : ``}`}
              />
            </div>

            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.galleryWrapper ? classes.galleryWrapper : ``
              }`}
            >
              <GrGallery
                className={`text-black ${
                  classes?.icongallery ? classes.icongallery : ``
                }`}
              />
            </div>
          </div>
          <div className={` ${classes?.body ? classes.body : ""}`}>
            <h3
              className={`line-clamp-2  group-hover:text-primary transition-all mb-[10px] ${
                classes?.title ? classes.title : ""
              }`}
            >
              {data?.highlight && (
                <span
                  className={`inline-flex items-center gap-1 pr-1 ${
                    classes?.highlight ? classes.highlight : ``
                  }`}
                >
                  <span className=" mb-0 text-primary font-medium leading-[25px]">
                    {excerpt(data?.highlight, 12)}
                  </span>
                  <GoDotFill className="text-primary text-sm" />
                </span>
              )}

              {data?.title}
            </h3>

            {data?.excerpt && (
              <p
                className={`line-clamp-4  ${
                  classes?.desc ? classes?.desc : ""
                }`}
              >
                {data?.excerpt}
              </p>
            )}

            <span
              className={`mb-0 text-[13px] ${
                classes?.date ? classes?.date : ""
              }`}
            >
              {banglaDateFormat(data?.publishedAt)}
            </span>
          </div>
          {data?.excerpt && (
            <p className={` hidden  ${classes?.hero ? classes?.hero : ""}`}>
              {data?.excerpt}
            </p>
          )}
          <div
            className={`hidden w-full h-full absolute top-0 left-0 blog_card_overlay ${
              classes?.overlay ? classes.overlay : ""
            }`}
          />
        </Link>
      ) : (
        <Link
          href={`/${data.primCategory.slug}/${data?.slug}`}
          className={`grid  group hover:text-inherit relative  ${
            classes?.root ? classes.root : ""
          }`}
        >
          <div
            className={` ${classes?.imageWrapper ? classes.imageWrapper : ""}`}
          >
            <Image
              src={
                data?.featuredImage || "/images/misc/image_placeholder_big.webp"
              }
              alt="Top Stories"
              width={960}
              height={540}
              className={`object-cover ${
                classes?.imageStyle ? classes.imageStyle : ""
              }`}
            />
            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.iconWrapper ? classes.iconWrapper : ``
              }`}
            >
              <IoPlay
                className={`text-white ${classes?.icon ? classes.icon : ``}`}
              />
            </div>

            <div
              className={`hidden items-center justify-center rounded-full  ${
                classes?.galleryWrapper ? classes.galleryWrapper : ``
              }`}
            >
              <GrGallery
                className={`text-black ${
                  classes?.icongallery ? classes.icongallery : ``
                }`}
              />
            </div>
          </div>
          <div className={` ${classes?.body ? classes.body : ""}`}>
            <h3
              className={`line-clamp-2  group-hover:text-primary transition-all mb-[10px] ${
                classes?.title ? classes.title : ""
              }`}
            >
              {data?.highlight && (
                <span
                  className={`inline-flex items-center gap-1 pr-1 ${
                    classes?.highlight ? classes.highlight : ``
                  }`}
                >
                  <span className=" mb-0 text-primary font-medium leading-[25px]">
                    {excerpt(data?.highlight, 12)}
                  </span>
                  <GoDotFill className="text-primary text-sm" />
                </span>
              )}

              {data?.title}
            </h3>

            {data?.excerpt && (
              <p
                className={`line-clamp-4  ${
                  classes?.desc ? classes?.desc : ""
                }`}
              >
                {data?.excerpt}
              </p>
            )}

            <span
              className={`mb-0 text-[13px] ${
                classes?.date ? classes?.date : ""
              }`}
            >
              {banglaDateFormat(data?.publishedAt)}
            </span>
          </div>
          {data?.excerpt && (
            <p className={` hidden  ${classes?.hero ? classes?.hero : ""}`}>
              {data?.excerpt}
            </p>
          )}
          <div
            className={`hidden w-full h-full absolute top-0 left-0 blog_card_overlay ${
              classes?.overlay ? classes.overlay : ""
            }`}
          />
        </Link>
      )}
    </>
  );
};

export default BlogCard;

{
  /* <div
className={`hidden items-center justify-center rounded-full top-[15px] left-[15px] ${
  classes?.imgiconWrapper ? classes.imgiconWrapper : ``
}`}
>
<TbPhotoShare
  className={`text-white ${
    classes?.imgicon ? classes.imgicon : ``
  }`}
/>
</div> */
}
```


frontend-news-categories

```tsx 

import Adlong from "@/modules/frontend/@common/advertisement/AdLong";
import Ad4 from "@/modules/frontend/@common/advertisement/Ad4";
import AdvertiseSpace2 from "./Advertisement_Space/AdvertiseSpace2";
import Ad2 from "@/modules/frontend/@common/advertisement/Ads2";
import Ad1 from "@/modules/frontend/@common/advertisement/Ad1";
import Ad3 from "@/modules/frontend/@common/advertisement/Ads3";
import Ads1 from "@/modules/frontend/@common/advertisement/Ad1360";
import Ads3 from "@/modules/frontend/@common/advertisement/Ad3";
import Ads2 from "@/modules/frontend/@common/advertisement/Ad2";
import Ads333 from "./Advertisement_Space/Ads3.3";
import { TopicListCard } from "./TopicListCard";

const NewsList = ({ data }: any) => {
  return (
    <div className=" lg:pt-[30px]">
      <div className="grid lg:grid-cols-[3fr_6fr_3fr] gap-[26px]">
        <div className="block lg:hidden">
          <Ads1 />
        </div>
        <div className="lg:w-[120px]  hidden lg:block  ml-auto lg:mt-4">
          <Adlong />
        </div>

        <div>
          {data?.map((item: any, i: any) => {
            const last = data.length;
            return (
              <TopicListCard
                key={i}
                data={item}
                classes={{
                  root: `md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_202px] col-start-1 col-end-3 self-start items-start  gap-[26px] ${
                    last - 1 > i ? "border-b" : ""
                  } pb-4 m-4`,
                  imageWrapper: "!mb-0 !h-[190px] lg:!h-[130px] lg:order-last",
                  imageStyle: "!h-full object-cover",
                  title: "lg:text-xl text-[22px] leading-[26px] !line-clamp-2",
                  desc: " text-base leading-[21px] mb-1 !line-clamp-2",
                  date: "mb-3 text-[13px] leading-[17px]",
                }}
              />
            );
          })}
        </div>
        <div className="order-2 mt-4 lg:block hidden">
          <Ad4 />
        </div>
        <div className=" lg:hidden block">
          <Ads333 />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
```

Topic List card

```tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { banglaDateFormat, excerpt } from "@/helpers/utils";

export interface TopicListCardProps {
  data?: any;
  classes?: {
    root?: any;
    imageWrapper?: string;
    imageStyle?: string;
    iconWrapper?: string;
    title?: string;
    icon?: string;
    galleryWrapper?: string;
    icongallery?: string;
    body?: string;
    highlight?: string;
    desc?: string;
    date?: string;
    hero?: string;
    overlay?: string;
  };
  type?: string;
}

export const TopicListCard = ({ data, classes }: TopicListCardProps) => {
  return (
    <>
      <Link
        href={`/${data.primCategory.slug}/${data.slug}`}
        className={`grid group hover:text-inherit relative  ${
          classes?.root ? classes.root : ""
        }`}
      >
        <div
          className={` ${classes?.imageWrapper ? classes.imageWrapper : ""}`}
        >
          <Image
            src={
              data?.featuredImage || "/images/misc/image_placeholder_big.webp"
            }
            alt="Top Stories"
            width={960}
            height={540}
            className={`object-cover ${
              classes?.imageStyle ? classes.imageStyle : ""
            }`}
          />
          <div
            className={`hidden items-center justify-center rounded-full  ${
              classes?.iconWrapper ? classes.iconWrapper : ``
            }`}
          >
            <IoPlay
              className={`text-white ${classes?.icon ? classes.icon : ``}`}
            />
          </div>

          <div
            className={`hidden items-center justify-center rounded-full  ${
              classes?.galleryWrapper ? classes.galleryWrapper : ``
            }`}
          >
            <GrGallery
              className={`text-black ${
                classes?.icongallery ? classes.icongallery : ``
              }`}
            />
          </div>
        </div>
        <div className={` ${classes?.body ? classes.body : ""}`}>
          <h3
            className={`line-clamp-2  group-hover:text-primary transition-all mb-[10px] ${
              classes?.title ? classes.title : ""
            }`}
          >
            {data?.highlight && (
              <span
                className={`inline-flex items-center gap-1 pr-1 ${
                  classes?.highlight ? classes.highlight : ``
                }`}
              >
                <span className=" mb-0 text-primary font-medium leading-[25px]">
                  {excerpt(data?.highlight, 12)}
                </span>
                <GoDotFill className="text-primary text-sm" />
              </span>
            )}

            {data?.title}
          </h3>

          {data?.excerpt && (
            <p
              className={`line-clamp-4  ${classes?.desc ? classes?.desc : ""}`}
            >
              {data?.excerpt}
            </p>
          )}

          <span
            className={`mb-0 text-[13px] ${classes?.date ? classes?.date : ""}`}
          >
            {banglaDateFormat(data?.publishedAt)}
          </span>
        </div>
        {data?.excerpt && (
          <p className={` hidden  ${classes?.hero ? classes?.hero : ""}`}>
            {data?.excerpt}
          </p>
        )}
        <div
          className={`hidden w-full h-full absolute top-0 left-0 blog_card_overlay ${
            classes?.overlay ? classes.overlay : ""
          }`}
        />
      </Link>
    </>
  );
};
```

frontend-news-topics-index

```tsx
import BlogCard from "@/modules/@common/blog-card";
import PopularNewsTab from "../../@common/popular-news-tab";
import HeadingWithOption from "../categories/@components/HeadingWithOption";
import AdvertiseSpace1 from "../categories/@components/Advertisement_Space/AdvertiseSpace1";
import AdvertiseSpace2 from "../categories/@components/Advertisement_Space/AdvertiseSpace2";
import NewsList from "../categories/@components/NewsList";
import TagsHeader from "./@components/tag-header";

const topStoriesData = [
  {
    title: "নৌকা ও ঈগল ঘিরে বিভক্ত আওয়ামী লীগ, সমানতালে চলছে প্রচারণা",
    shortDescription:
      "বগুড়ায় সরকারি প্রাথমিক বিদ্যালয়ের শিক্ষক নিয়োগ পরীক্ষায় জালিয়াতির অভিযোগে ১৯ জনকে আটক করেছে পুলিশ। এছাড়াও নানা কারণে বহিষ্কার হয়েছেন আরও ২৬ জন। শুক্রবার (২ ফেব্রুয়ারি) পরীক্ষা চলাকালে বিভিন্ন কেন্দ্র থেকে মোবাইল ও ইলেকট্রনিক্স ডিভাইস ব্যবহারসহ নানাভাবে অসদুপায় অবলম্বন করায় তাদের গ্রেপ্তার করা হয়। জেলা শিক্ষা অফিস মোবাইল ও ইলেকট্রনিক্স ডিভাইস ব্যবহারসহ নানাভাবে অসদুপায় অবলম্বন করায় তাদের গ্রেপ্তার করা হয়। জেলা শিক্ষা অফিস গ্রেপ্তার করা হয়। জেলা শিক্ষা অফিস মোবাইল ও ইলেকট্রনিক্স ডিভাইস ব্যবহারসহ নানাভাবে অসদুপায় অবলম্বন করায় তাদের গ্রেপ্তার করা হয়। জেলা শিক্ষা অফিস",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "2এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "3এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title: "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title: "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই",
    shortDescription:
      "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
];

const Topics = ({ data, catSlug, total, excludeBlogIds }: any) => {
  return (
    <section className="mt-5">
      <div className=" container ">
        <TagsHeader catSlug={catSlug} data={data} />
        <NewsList data={data} />
      </div>
    </section>
  );
};

export default Topics;
```

TagsHeader

```tsx

"use client";

import { useGetSingleTagslugQuery } from "@/appstore/news/tag/tag_api";
import { Skeleton } from "antd";

const TagsHeader = ({ data, catSlug }: any) => {
  const { data: singleTag, isLoading: singleLoading } =
    useGetSingleTagslugQuery({
      slug: catSlug,
    });

  return (
    <div className="max-w-[830px] mx-auto flex items-start flex-col gap-3 mb-8 cursor-pointer">
      <div className="border-b w-full">
        <Skeleton
          className="max-w-[830px] mx-auto py-8"
          loading={singleLoading}
          active
        >
          <h1 className="font-semibold text-4xl text-primary mb-4">
            {singleTag?.title}
          </h1>
          <span className="block mb-6">{singleTag?.title}</span>
        </Skeleton>
      </div>
    </div>
  );
};

export default TagsHeader;
```
