import * as definitions from "./definitions";

const SettingsInstance = {
  ...definitions.SettingsComponent,
  children: [{ ...definitions.MenuComponent }]
};

const WithAuthorizationInstance = {
  ...definitions.WithAuthorization,
  children: [{ ...definitions.WrappedComponent }]
};

const HiddenComponentAuthorization = {
  ...definitions.HiddenComponentAuthorization,
  children: [WithAuthorizationInstance]
};

const FlatButtonInstance = {
  ...definitions.FlatButton,
  children: [
    HiddenComponentAuthorization,
    {
      ...definitions.OverlayTrigger,
      children: [
        {
          ...definitions.Tooltip
        }
      ]
    }
  ]
};

const ZoomElementInstance = {
  ...definitions.ZoomElementComponent,
  children: [
    FlatButtonInstance,
    FlatButtonInstance,
    FlatButtonInstance,
    FlatButtonInstance
  ]
};

const TopologyEditorInstance = {
  ...definitions.TopologyEditorComponent,
  children: [ZoomElementInstance, { ...definitions.GoJSComponent }]
};

const DevicesListInstance = {
  ...definitions.DevicesList,
  children: [
    { ...definitions.SimpleDottedProgress },
    {
      ...definitions.SimpleListHeader,
      children: [{ ...definitions.CheckboxButton }]
    },
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
    DevicesListInstance,
    { ...definitions.Button },
    { ...definitions.Button },
    {
      ...definitions.SimpleListHeader,
      children: [{ ...definitions.SimpleDottedProgress }]
    }
  ]
};

const SingleInterfaceListInstance = {
  ...definitions.SingleInterfaceList,
  children: [
    { ...definitions.Button },
    { ...definitions.NetworkRangeInput },
    {
      ...definitions.SimpleListHeader,
      children: [{ ...definitions.CheckboxButton }]
    }
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
    {
      ...definitions.MenuComponent,
      children: [
        {
          DropdownInstance,
          children: [SettingsInstance]
        }
      ]
    },
    ScanManagerInstance,
    {
      ...definitions.MenuComponent,
      children: [
        {
          ...definitions.MenuComponent,
          children: [
            {
              DropdownInstance,
              children: [SettingsInstance]
            }
          ]
        }
      ]
    }
  ]
};

const ModalLogInstance = {
  ...definitions.ModalLog,
  children: [
    { ...definitions.ReactTable },
    { ...definitions.Button },
    { ...definitions.Button }
  ]
};

const NavigationMenuInstance = {
  ...definitions.NavigationMenuComponent,
  children: [ModalLogInstance, { ...definitions.WebviewElement }]
};

const ImportInstance = {
  ...definitions.Import,
  children: [
    ...definitions.Alert,
    ...definitions.ProgressBar,
    ...definitions.Interpolate,
    ...definitions.Dropzone
  ]
};

const ImportTopologyFormInstance = {
  ...definitions.ImportTopologyForm,
  children: [ImportInstance]
};

const ProjectConfigurator = {
  ...definitions.ProjectConfigurator,
  children: [ImportTopologyFormInstance, {...definitions.BasicInputComponent}]
};

const SidebarInstance = {
  ...definitions.SidebarComponent,
  children: [
    { ...definitions.UserMenuComponent },
    {
      ...definitions.MenuComponent,
      children: [
        {
          ...DropdownInstance,
          children: [...DropdownInstance.children, ProjectConfigurator]
        }
      ]
    },
    NavigationMenuInstance
  ]
};

// Sections
const TabularDevicesInstance = {
  ...definitions.TabularViewDevices,
  children: [
    { ...definitions.DeviceStatus },
    { ...definitions.NoResultsView },
    { ...definitions.TabularHeader },
    { ...definitions.ReactTable }
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

const TextInputInstance = {
  ...definitions.TextInput,
  children: [
    { ...definitions.OverlayTrigger, children: [{ ...definitions.Tooltip }] },
    { ...definitions.DisableAuthorization }
  ]
};

const ConnectionInfoInstance = {
  ...definitions.ConnectionInfo,
  children: [
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    {
      ...definitions.ValidationComponent,
      children: [{ ...definitions.BasicInputComponent }]
    },
    { ...definitions.BasicInputComponent }
  ]
};

const TextAreaInstance = {
  ...definitions.TextArea,
  children: [{ ...definitions.DisableAuthorization }]
};

const GenericTcpIpFormInstance = {
  ...definitions.GenericTcpIpForm,
  children: [
    {
      ...definitions.Form,
      children: [
        { ...definitions.CommonFormSection },
        {
          ...definitions.FormFieldsGroup,
          children: [TextAreaInstance]
        }
      ]
    }
  ]
};

const RaisedButtonInstance = {
  ...definitions.RaisedButton,
  children: [
    {
      ...definitions.OverlayTrigger,
      children: [{ ...definitions.Tooltip }]
    }
  ]
};

const SlidingPanelTopBarInstance = {
  ...definitions.SlidingPanelTopBar,
  children: [
    { ...definitions.SlidingPanelButton },
    { ...definitions.SlidingPanelButton },
    RaisedButtonInstance,
    RaisedButtonInstance
  ]
};

const DeviceCommonInfoInstance = {
  ...definitions.DeviceCommonInfo,
  children: [
    TextAreaInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance,
    TextInputInstance
  ]
};

const ParametersInstance = {
  ...definitions.Parameters,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.Button },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.Button },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent }
  ]
};

const DeviceGenericInfoInstance = {
  ...definitions.DeviceGenericInfo,
  children: [
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.CheckboxButton },
    { ...definitions.CheckboxButton },
    { ...definitions.Button },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.BasicInputComponent },
    { ...definitions.Button },
    ParametersInstance
  ]
};

const TabsPanelCellInstance = {
  ...definitions.TabsPanelCell,
  children: [
    { ...definitions.BasicInputComponent },
    {
      ...definitions.ValidationComponent,
      children: [{ ...definitions.BasicInputComponent }]
    },
    {
      ...definitions.ValidationComponent,
      children: [{ ...definitions.BasicInputComponent }]
    }
  ]
};

const DevicePropertyStateInstance = {
  ...definitions.DevicePropertyState,
  children: [TabsPanelCellInstance]
};

const TabsPanelRowInstance = {
  ...definitions.TabsPanelRow,
  children: [
    TabsPanelCellInstance,
    {
      ...TabsPanelCellInstance,
      children: [
        ...TabsPanelCellInstance.children,
        { ...definitions.DevicePropertyAccessRights }
      ]
    },
    TabsPanelCellInstance,
    DevicePropertyStateInstance,
    TabsPanelCellInstance
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
    SlidingPanelTopBarInstance,
    DeviceSummaryInstance,
    SlidingPanelTabsInstance,
    SlidingPanelTopBarInstance,
    DeviceSummaryInstance,
    SlidingPanelTabsInstance,
    SlidingPanelTopBarInstance,
    DeviceSummaryInstance,
    GenericTcpIpFormInstance,
    SlidingPanelTopBarInstance,
    ConnectionInfoInstance
  ]
};

const DropzoneLoadingInstance = {
  ...definitions.DropzoneLoading,
  children: [{ ...definitions.CircularProgressbar }]
};

const DeviceImportInstance = {
  ...definitions.DeviceImport,
  children: [
    {
      ...definitions.Dropzone,
      children: [
        DropzoneLoadingInstance,
        { ...definitions.DropzonePlaceholder }
      ]
    },
    { ...definitions.DeviceImportListItem }
  ]
};

const FilterDevicesList = {
  ...definitions.FilterDevicesList,
  children: [{ ...definitions.Button }, { ...definitions.CheckboxButton }]
};

const FilterDevicesForm = {
  ...definitions.FilterDevicesForm,
  children: [
    { ...definitions.Button },
    FilterDevicesList,
    FilterDevicesList,
    FilterDevicesList
  ]
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
