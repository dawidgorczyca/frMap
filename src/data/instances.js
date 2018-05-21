import * as definitions from './definitions';

export const SpinnerInstance = {
  ...definitions.Spinner
}

export const MenuInstance = {
  ...definitions.MenuComponent
}

export const UserMenuInstance = {
  ...definitions.UserMenuComponent
}

export const WebviewElementInstance = {
  ...definitions.WebviewElement
}

export const ButtonInstance = {
  ...definitions.Button
}

export const SettingsInstance = {
  ...definitions.SettingsComponent
}

export const SimpleDottedProgressInstance = {
  ...definitions.SimpleDottedProgress
}

export const ListItemBackgroundInstance = {
  ...definitions.ListItemBackground
}

export const SimpleListHeaderInstance = {
  ...definitions.SimpleListHeader
}

export const NoResultsViewInstance = {
  ...definitions.NoResultsView
}

export const CheckboxButtonInstance = {
  ...definitions.CheckboxButton
}

export const NetworkRangeInputInstance = {
  ...definitions.NetworkRangeInput
}

export const GoJSComponentInstance = {
  ...definitions.GoJSComponent
}

export const WithAuthorization = {
  ...definitions.WithAuthorization
}

export const HiddenComponentAuthorization = {
  ...definitions.HiddenComponentAuthorization,
  children: [
    WithAuthorization
  ]
}

export const FlatButtonInstance = {
  ...definitions.FlatButton,
  children: [
    HiddenComponentAuthorization
  ]
}

export const ZoomElementInstance = {
  ...definitions.ZoomElementComponent,
  children: [
    FlatButtonInstance
  ]
}

export const TopologyEditorInstance = {
  ...definitions.TopologyEditorComponent,
  children: [
    ZoomElementInstance,
    GoJSComponentInstance
  ]
}

export const DevicesListInstance = {
  ...definitions.DevicesList,
  children: [
    SimpleDottedProgressInstance,
    CheckboxButtonInstance,
    SimpleListHeaderInstance,
    ListItemBackgroundInstance,
    NoResultsViewInstance,
  ]
}



export const DropdownInstance = {
  ...definitions.DropdownComponent,
  children: [
    { ...definitions.OutsideAlerter },
  ],
}

export const DevicesScanManagerInstance = {
  ...definitions.DevicesScanManager,
  children: [
    SimpleDottedProgressInstance,
    SpinnerInstance,
    DevicesListInstance,
    ButtonInstance,
    SimpleListHeaderInstance
  ]
}

export const SingleInterfaceListInstance = {
  ...definitions.SingleInterfaceList,
  children: [
    CheckboxButtonInstance,
    ButtonInstance,
    NetworkRangeInputInstance,
    SimpleListHeaderInstance
  ]
}

export const InterfacesListInstance = {
  ...definitions.InterfacesList,
  children: [
    NoResultsViewInstance,
    SingleInterfaceListInstance
  ]
}

export const InterfacesScanManagerInstance = {
  ...definitions.InterfacesScanManager,
  children: [
    InterfacesListInstance,
    ButtonInstance
  ]
}

export const ScanManagerInstance = {
  ...definitions.ScanManager,
  children: [
    DevicesScanManagerInstance,
    InterfacesScanManagerInstance
  ]
}

export const TopbarInstance = {
  ...definitions.TopbarComponent,
  children: [
    MenuInstance,
    DropdownInstance,
    ScanManagerInstance
  ]
}

export const ModalLogInstance = {
  ...definitions.ModalLog,
  children: [
    ButtonInstance
  ]
}

export const NavigationMenuInstance = {
  ...definitions.NavigationMenuComponent,
  children: [
    ModalLogInstance,
    WebviewElementInstance
  ]
}

export const SidebarInstance = {
  ...definitions.SidebarComponent,
  children: [
    UserMenuInstance,
    MenuInstance,
    DropdownInstance,
    NavigationMenuInstance
  ]
}

// Sections
export const TabularDevicesInstance = {
  ...definitions.TabularViewDevices
}

export const TabularConnectionsInstance = {
  ...definitions.TabularViewConnections
}

export const MasterConfigurationFormInstance = {
  ...definitions.MasterConfigurationForm,
  children: [
    { ...definitions.BasicInputComponent }
  ]
}

export const DeviceSummaryInstance = {
  ...definitions.DeviceSummary,
  children: [
    { ...definitions.DeviceStatus },
    MasterConfigurationFormInstance
  ]
}

export const ConnectionInfoInstance = {
  ...definitions.ConnectionInfo,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.ValidationComponent },
  ]
}

export const TextAreaInstance = {
  ...definitions.TextArea,
  children: [
    { ...definitions.DisableAuthorization }
  ]
}


export const GenericTcpIpFormInstance = {
  ...definitions.GenericTcpIpForm,
  children: [
    TextAreaInstance,
    { ...definitions.Form },
    { ...definitions.FormFieldsGroup },
    { ...definitions.CommonFormSection },
  ]
}

export const RaisedButtonInstance = {
  ...definitions.RaisedButton,
  children: [
    { ...definitions.Tooltip },
    { ...definitions.OverlayTrigger }
  ]
}

export const SlidingPanelTopBarInstance = {
  ...definitions.SlidingPanelTopBar,
  children: [
    RaisedButtonInstance,
    { ...definitions.SlidingPanelButton },
  ]
}

export const TextInputInstance = {
  ...definitions.TextInput,
  children: [
    { ...definitions.Tooltip },
    { ...definitions.OverlayTrigger },
    { ...definitions.DisableAuthorization },
  ]
}


export const DeviceCommonInfoInstance = {
  ...definitions.DeviceCommonInfo,
  children: [
    TextAreaInstance,
    TextInputInstance,
  ]
}

export const ParametersInstance = {
  ...definitions.Parameters,
  children: [
    ButtonInstance,
    { ...definitions.BasicInputComponent }
  ]
}

export const DeviceGenericInfoInstance = {
  ...definitions.DeviceGenericInfo,
  children: [
    CheckboxButtonInstance,
    ButtonInstance,
    ParametersInstance
  ]
}

export const TabsPanelCellInstance = {
  ...definitions.TabsPanelCell,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.ValidationComponent },
  ]
}

export const DevicePropertyStateInstance = {
  ...definitions.DevicePropertyAccessRights,
  children: [
    TabsPanelCellInstance
  ]
}

export const TabsPanelRowInstance = {
  ...definitions.TabsPanelRow,
  children: [
    TabsPanelCellInstance,
    DevicePropertyStateInstance,
    { ...definitions.DevicePropertyAccessRights }
  ]
}

export const TabsPanelBodyInstance = {
  ...definitions.TabsPanelBody,
  children: [
    TabsPanelRowInstance
  ]
}


export const SlidingPanelTabsContentInstance = {
  ...definitions.SlidingPanelTabsContent,
  children: [
    TabsPanelBodyInstance
  ]
}

export const SlidingPanelTabsInstance = {
  ...definitions.SlidingPanelTabs,
  children: [
    DeviceCommonInfoInstance,
    DeviceGenericInfoInstance,
    { ...definitions.SlidingPanelButton },
    SlidingPanelTabsContentInstance
  ]
}


export const RightSideInstance = {
  ...definitions.SlidingPanelRightSideComponent,
  children: [
    DeviceSummaryInstance,
    ConnectionInfoInstance,
    GenericTcpIpFormInstance,
    SlidingPanelTopBarInstance,
    SlidingPanelTabsInstance,
  ]
}

export const DropzoneLoadingInstance = {
  ...definitions.DropzoneLoading,
  children: [
    { ...definitions.CircularProgressbar }
  ]
}

export const DeviceImportInstance = {
  ...definitions.DeviceImport,
  children: [
    { ...definitions.Dropzone },
    { ...definitions.DeviceImportListItem },
    { ...definitions.DropzonePlaceholder },
    DropzoneLoadingInstance,
  ]
}

export const FilterDevicesList = {
  ...definitions.FilterDevicesList,
  children: [
    ButtonInstance,
    CheckboxButtonInstance
  ]
}

export const FilterDevicesForm = {
  ...definitions.FilterDevicesForm,
  children: [
    ButtonInstance,
    FilterDevicesList
  ]
}

export const DeviceCatalogFilterInstance = {
  ...definitions.DeviceCatalogFilter,
  children: [
    FilterDevicesForm
  ]
}

export const DeviceCatalogListInstance = {
  ...definitions.DeviceCatalogList,
  children: [
    { ...definitions.DeviceCatalogItem },
    NoResultsViewInstance
  ]
}

export const DeviceCatalogSearchInstance = {
  ...definitions.DeviceCatalogSearch,
  children: [
    { ...definitions.BasicInputComponent }
  ]
}

export const DeviceCatalogComponentInstance = {
  ...definitions.DeviceCatalogComponent,
  children: [
    DeviceImportInstance,
    DeviceCatalogFilterInstance,
    DeviceCatalogListInstance,
    DeviceCatalogSearchInstance
  ]
}

export const LeftSideInstance = {
  ...definitions.SlidingPanelLeftSideComponent,
  children: [
    DeviceCatalogComponentInstance
  ]
}

export const TopologyViewInstance = {
  ...definitions.TopologyViewComponent,
  children: [
    TopologyEditorInstance
  ]
}

// Main Containers
export const ContentBaseInstance = {
  ...definitions.ContentBaseComponent,
  children: [
    TopologyViewInstance,
    LeftSideInstance,
    RightSideInstance,
    TabularDevicesInstance,
    TabularConnectionsInstance
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