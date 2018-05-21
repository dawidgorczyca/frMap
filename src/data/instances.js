import * as definitions from "./definitions";

const SettingsInstance = {
  ...definitions.SettingsComponent,
  children: [{ ...definitions.MenuComponent }]
};

const HiddenComponentAuthorization = {
  ...definitions.HiddenComponentAuthorization,
  children: [{ ...definitions.WithAuthorization }]
};

const FlatButtonInstance = {
  ...definitions.FlatButton,
  children: [HiddenComponentAuthorization]
};

const ZoomElementInstance = {
  ...definitions.ZoomElementComponent,
  children: [FlatButtonInstance]
};

const TopologyEditorInstance = {
  ...definitions.TopologyEditorComponent,
  children: [ZoomElementInstance, { ...definitions.GoJSComponent }]
};

const DevicesListInstance = {
  ...definitions.DevicesList,
  children: [
    { ...definitions.SimpleDottedProgress },
    { ...definitions.CheckboxButton },
    { ...definitions.SimpleListHeader },
    { ...definitions.ListItemBackground },
    { ...definitions.NoResultsView }
  ]
};

const DropdownInstance = {
  ...definitions.DropdownComponent,
  children: [{ ...definitions.OutsideAlerter }]
};

const DevicesScanManagerInstance = {
  ...definitions.DevicesScanManager,
  children: [
    { ...definitions.SimpleDottedProgress },
    { ...definitions.Spinner },
    DevicesListInstance,
    { ...definitions.Button },
    { ...definitions.SimpleListHeader }
  ]
};

const SingleInterfaceListInstance = {
  ...definitions.SingleInterfaceList,
  children: [
    { ...definitions.CheckboxButton },
    { ...definitions.Button },
    { ...definitions.NetworkRangeInput },
    { ...definitions.SimpleListHeader }
  ]
};

const InterfacesListInstance = {
  ...definitions.InterfacesList,
  children: [{ ...definitions.NoResultsView }, SingleInterfaceListInstance]
};

const InterfacesScanManagerInstance = {
  ...definitions.InterfacesScanManager,
  children: [InterfacesListInstance, { ...definitions.Button }]
};

const ScanManagerInstance = {
  ...definitions.ScanManager,
  children: [DevicesScanManagerInstance, InterfacesScanManagerInstance]
};

const TopbarInstance = {
  ...definitions.TopbarComponent,
  children: [
    { ...definitions.MenuComponent },
    DropdownInstance,
    SettingsInstance,
    ScanManagerInstance
  ]
};

const ModalLogInstance = {
  ...definitions.ModalLog,
  children: [{ ...definitions.Button }]
};

const NavigationMenuInstance = {
  ...definitions.NavigationMenuComponent,
  children: [ModalLogInstance, { ...definitions.WebviewElement }]
};

const SidebarInstance = {
  ...definitions.SidebarComponent,
  children: [
    { ...definitions.UserMenuComponent },
    { ...definitions.MenuComponent },
    DropdownInstance,
    NavigationMenuInstance
  ]
};

// Sections
const TabularDevicesInstance = {
  ...definitions.TabularViewDevices,
  children: [
    { ...definitions.DeviceStatus },
    { ...definitions.NoResultsView },
    { ...definitions.TabularHeader }
  ]
};

const TabularConnectionsInstance = {
  ...definitions.TabularViewConnections,
  children: [{ ...definitions.NoResultsView }, { ...definitions.TabularHeader }]
};

const MasterConfigurationFormInstance = {
  ...definitions.MasterConfigurationForm,
  children: [{ ...definitions.BasicInputComponent }]
};

const DeviceSummaryInstance = {
  ...definitions.DeviceSummary,
  children: [{ ...definitions.DeviceStatus }, MasterConfigurationFormInstance]
};

const ConnectionInfoInstance = {
  ...definitions.ConnectionInfo,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.ValidationComponent }
  ]
};

const TextAreaInstance = {
  ...definitions.TextArea,
  children: [{ ...definitions.DisableAuthorization }]
};

const GenericTcpIpFormInstance = {
  ...definitions.GenericTcpIpForm,
  children: [
    TextAreaInstance,
    { ...definitions.Form },
    { ...definitions.FormFieldsGroup },
    { ...definitions.CommonFormSection }
  ]
};

const RaisedButtonInstance = {
  ...definitions.RaisedButton,
  children: [{ ...definitions.Tooltip }, { ...definitions.OverlayTrigger }]
};

const SlidingPanelTopBarInstance = {
  ...definitions.SlidingPanelTopBar,
  children: [RaisedButtonInstance, { ...definitions.SlidingPanelButton }]
};

const TextInputInstance = {
  ...definitions.TextInput,
  children: [
    { ...definitions.Tooltip },
    { ...definitions.OverlayTrigger },
    { ...definitions.DisableAuthorization }
  ]
};

const DeviceCommonInfoInstance = {
  ...definitions.DeviceCommonInfo,
  children: [TextAreaInstance, TextInputInstance]
};

const ParametersInstance = {
  ...definitions.Parameters,
  children: [{ ...definitions.Button }, { ...definitions.BasicInputComponent }]
};

const DeviceGenericInfoInstance = {
  ...definitions.DeviceGenericInfo,
  children: [
    { ...definitions.CheckboxButton },
    { ...definitions.Button },
    ParametersInstance
  ]
};

const TabsPanelCellInstance = {
  ...definitions.TabsPanelCell,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.ValidationComponent }
  ]
};

const DevicePropertyStateInstance = {
  ...definitions.DevicePropertyAccessRights,
  children: [TabsPanelCellInstance]
};

const TabsPanelRowInstance = {
  ...definitions.TabsPanelRow,
  children: [
    TabsPanelCellInstance,
    DevicePropertyStateInstance,
    { ...definitions.DevicePropertyAccessRights }
  ]
};

const TabsPanelBodyInstance = {
  ...definitions.TabsPanelBody,
  children: [TabsPanelRowInstance]
};

const SlidingPanelTabsContentInstance = {
  ...definitions.SlidingPanelTabsContent,
  children: [TabsPanelBodyInstance]
};

const SlidingPanelTabsInstance = {
  ...definitions.SlidingPanelTabs,
  children: [
    DeviceCommonInfoInstance,
    DeviceGenericInfoInstance,
    { ...definitions.SlidingPanelButton },
    SlidingPanelTabsContentInstance
  ]
};

const RightSideInstance = {
  ...definitions.SlidingPanelRightSideComponent,
  children: [
    DeviceSummaryInstance,
    ConnectionInfoInstance,
    GenericTcpIpFormInstance,
    SlidingPanelTopBarInstance,
    SlidingPanelTabsInstance
  ]
};

const DropzoneLoadingInstance = {
  ...definitions.DropzoneLoading,
  children: [{ ...definitions.CircularProgressbar }]
};

const DeviceImportInstance = {
  ...definitions.DeviceImport,
  children: [
    { ...definitions.Dropzone },
    { ...definitions.DeviceImportListItem },
    { ...definitions.DropzonePlaceholder },
    DropzoneLoadingInstance
  ]
};

const FilterDevicesList = {
  ...definitions.FilterDevicesList,
  children: [{ ...definitions.Button }, { ...definitions.CheckboxButton }]
};

const FilterDevicesForm = {
  ...definitions.FilterDevicesForm,
  children: [{ ...definitions.Button }, FilterDevicesList]
};

const DeviceCatalogFilterInstance = {
  ...definitions.DeviceCatalogFilter,
  children: [FilterDevicesForm]
};

const DeviceCatalogListInstance = {
  ...definitions.DeviceCatalogList,
  children: [
    { ...definitions.DeviceCatalogItem },
    { ...definitions.NoResultsView }
  ]
};

const DeviceCatalogSearchInstance = {
  ...definitions.DeviceCatalogSearch,
  children: [{ ...definitions.BasicInputComponent }]
};

const DeviceCatalogComponentInstance = {
  ...definitions.DeviceCatalogComponent,
  children: [
    DeviceImportInstance,
    DeviceCatalogFilterInstance,
    DeviceCatalogListInstance,
    DeviceCatalogSearchInstance
  ]
};

const LeftSideInstance = {
  ...definitions.SlidingPanelLeftSideComponent,
  children: [DeviceCatalogComponentInstance]
};

const TopologyViewInstance = {
  ...definitions.TopologyViewComponent,
  children: [TopologyEditorInstance]
};

// Main Containers
const ContentBaseInstance = {
  ...definitions.ContentBaseComponent,
  children: [
    TopologyViewInstance,
    LeftSideInstance,
    RightSideInstance,
    TabularDevicesInstance,
    TabularConnectionsInstance
  ]
};

const AuthorizedComponentInstance = {
  ...definitions.AuthorizedComponent,
  children: [SidebarInstance, TopbarInstance, ContentBaseInstance]
};

const AppInstance = {
  ...definitions.AppComponent,
  children: [AuthorizedComponentInstance]
};

export default AppInstance;
