import * as definitions from './definitions';

// Topbar
const SettingsInstance = {
  ...definitions.SettingsComponent
}

const TopbarInstance = {
  ...definitions.TopbarComponent,
  children: [
    {
      ...definitions.MenuComponent,
    },
    {
      ...definitions.MenuComponent,
      children: [
        {
          ...definitions.DropdownComponent,
          children: [
            SettingsInstance
          ]
        }
      ]
    },
  ]
}

// Sidebar
const UserMenuInstance = {
  ...definitions.UserMenuComponent
}

const NavigationMenuInstance = {
  ...definitions.NavigationMenuComponent
}

const SidebarInstance = {
  ...definitions.SidebarComponent,
  children: [
    UserMenuInstance,
    {
      ...definitions.MenuComponent,
      children: [
        { ...definitions.DropdownComponent }
      ]
    },
    NavigationMenuInstance
  ]
}

// Sections
const LeftSideInstance = {
  ...definitions.SlidingPanelComponent,
  children: [
    {
      ...definitions.DeviceCatalogComponent,
      children: [
        {
          ...definitions.DeviceCatalogSearchComponent
        },
        {
          ...definitions.DeviceImportComponent
        },
        {
          ...definitions.DeviceCatalogFilterComponent
        },
        {
          ...definitions.DeviceCatalogListComponent
        }
      ]
    }
  ]
}

const TopologyViewInstance = {
  ...definitions.TopologyViewComponent,
  children: [
    {
      ...definitions.TopologyEditorComponent,
      children: [
        {
          ...definitions.ZoomElementComponent
        },
        {
          ...definitions.GoJSComponent
        }
      ]
    }
  ]
}

// Main Containers
const ContentBaseInstance = {
  ...definitions.ContentBaseComponent,
  children: [
    TopologyViewInstance,
    LeftSideInstance
  ]
}

const AuthorizedComponentInstance = {
  ...definitions.AuthorizedComponent,
  children: [
    SidebarInstance, TopbarInstance, ContentBaseInstance
  ]
}

const AppInstance = {
  ...definitions.AppComponent,
  children: [
    AuthorizedComponentInstance
  ]
}

export default AppInstance;