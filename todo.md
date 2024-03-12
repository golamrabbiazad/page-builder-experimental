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

## Dynamic sidebar menu using permission

- first fetch profile data.role.permission and check if this sidebar menus item permission is in the profile then print.

must use `useEffect` with `[]` dependencies.

```tsx

const [menuData, setMenuData] = useState([]);

useEffect(() => {

setMenuDate(profile?.roles[0]?.permissions);

}, []) 

const hasNewsPermssion = required_news_permission.some(permission => menuData.includes(permission));

list go on....
```

## Route Middleware

```tsx
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const REQUIRED_PERMISSION_LIST = [
  "create_permission",
  "view_permission",
  "edit_permission",
  "delete_permission",
];

// capture list of all permission in json file as permission: [], media: []

export default async function RouteMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJ1c2VybmFtZSI6ImZhaGltayIsImlhdCI6MTcxMDIwMjIzNCwiZXhwIjoxNzEwMzc1MDM0fQ.zVcqbiVlK3WnOJ3NqAbzDp1I3Jbvx_t-F16FLD-7F1k";

  const fetchProfile = await fetch(
    "https://generation-api.24onbd.com/api/auth/profile",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  const profile = await fetchProfile.json();

  const hasPermission = REQUIRED_PERMISSION_LIST.some((permission) =>
    profile?.roles[0]?.permissions.includes(permission)
  );

  if (req.nextUrl.pathname.startsWith("/admin/permission") && !hasPermission) {
    return NextResponse.redirect(new URL("/admin/not-found", req.url));
  }

  // check every route if he has the permission. otherwise redirect to 403

  console.log(profile);

  return NextResponse.next();
}
```
