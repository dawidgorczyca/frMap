import * as definitions from './definitions';

// Topbar
export const SettingsInstance = {
  ...definitions.SettingsComponent
}

export const TopbarInstance = {
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
export const UserMenuInstance = {
  ...definitions.UserMenuComponent
}

export const NavigationMenuInstance = {
  ...definitions.NavigationMenuComponent
}

export const SidebarInstance = {
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
export const LeftSideInstance = {
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

export const TopologyViewInstance = {
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
export const ContentBaseInstance = {
  ...definitions.ContentBaseComponent,
  children: [
    TopologyViewInstance,
    LeftSideInstance
  ]
}

export const AuthorizedComponentInstance = {
  ...definitions.AuthorizedComponent,
  children: [
    SidebarInstance, TopbarInstance, ContentBaseInstance
  ]
}

export const AppInstance = {
  ...definitions.AppComponent,
  children: [
    AuthorizedComponentInstance
  ]
}

export default AppInstance;