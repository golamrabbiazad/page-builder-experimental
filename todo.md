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

## Username Schema

```tsx
  // Validation schema
  const validationSchema = Yup.object().shape({
    adminType: Yup.string().required("Admin Type is required"),
    username: Yup.string()
      .required("username or email is required.")
      .test("is-email", "Invalid email", (value) => {
        return (
          Yup.string().email().isValidSync(value) ||
          Yup.string()
            .matches(
              /^[a-zA-Z0-9_.-]+$/,
              "Username can only contain letters, numbers, underscores, dots, or hyphens"
            )
            .isValidSync(value)
        );
      }),
    password: Yup.string().required("Password is required").min(6),
  });
```

## issues in frontend

- searchbar not working.
- nested category not showing.
- in tag/রাজশাহী-বিভাগ page still showing not news found from this tag.
- popular/most read/ tabs is still shows static news. no news in good news tab.
- in search page, left side search not working.
- no one wait for menu to be loaded in the screen except for news. 
- news date, AM/PM shows
- need more video gallery news.
- in video gallery details page social media icons are not same. need same size.
- in details page, comments section need attention.


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
