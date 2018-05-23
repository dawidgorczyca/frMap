export const AppComponent = {
  nodeName: "App",
  component: "App",
  description: "App container",
  propTypes: ["children"],
  dispatchers: [],
  subscriptions: []
};

export const AuthorizedComponent = {
  nodeName: "Authorized Component",
  component: "AuthorizedComponent",
  description: "",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const SidebarComponent = {
  nodeName: "Sidebar Component",
  component: "Sidebar",
  description: "",
  propTypes: [
    "translation",
    "dispatch",
    "currentCommunicationStructure",
    "communicationStructures",
    "topologyTitle",
    "topologyId"
  ],
  dispatchers: ["clearProjectDevices", "createEmptyTopologyProject"],
  subscriptions: [
    "communicationStructures",
    "currentCommunicationStructure",
    "topologyTitle",
    "topologyId"
  ]
};

export const TopbarComponent = {
  nodeName: "Topbar Component",
  component: "Topbar",
  description: "",
  propTypes: ["translation", "dispatch", "layout"],
  dispatchers: ["modifySectionByName", "showModal"],
  subscriptions: ["layout"]
};

export const ContentBaseComponent = {
  nodeName: "Content Base Component",
  component: "ContentBase",
  description: "",
  propTypes: ["dispatch", "layout"],
  dispatchers: ["addSection", "modifySectionByName"],
  subscriptions: ["layout"]
};

export const UserMenuComponent = {
  nodeName: "User Menu Component",
  component: "UserMenu",
  description: "",
  propTypes: ["dispatch"],
  dispatchers: ["logout"],
  subscriptions: []
};

export const NavigationMenuComponent = {
  nodeName: "Navigation Menu Component",
  component: "NavigationMenu",
  description: "",
  propTypes: ["translation", "dispatch"],
  dispatchers: ["showModal", "modifySectionByName", "hideModal"],
  subscriptions: []
};

export const SettingsComponent = {
  nodeName: "Settings Component",
  component: "Settings",
  description: "",
  propTypes: ["translation"],
  dispatchers: [],
  subscriptions: []
};

export const MenuComponent = {
  nodeName: "Menu Component",
  component: "Menu",
  description: "",
  propTypes: ["className", "type", "orientation", "children"],
  dispatchers: [],
  subscriptions: []
};

export const DropdownComponent = {
  nodeName: "Dropdown Component",
  component: "Dropdown",
  description: "",
  propTypes: ["className", "title", "position", "icon", "iconOpen", "children"],
  dispatchers: [],
  subscriptions: []
};

export const TopologyViewComponent = {
  nodeName: "Topology View Component",
  component: "TopologyView",
  description: "",
  propTypes: ["dispatch"],
  dispatchers: ["modifySectionByName"],
  subscriptions: []
};

export const TopologyEditorComponent = {
  nodeName: "Topology Editor Component",
  component: "TopologyEditor",
  description: "",
  propTypes: [
    "id",
    "status",
    "title",
    "currentCommunicationStructure",
    "communicationStructures",
    "connectDropTarget",
    "deviceActions",
    "topologyAction",
    "devicesList",
    "handleDeviceClick",
    "connectionsActions",
    "layoutActions",
    "communicationActions",
    "getObjectStateInterfaceData",
    "projectDevices",
    "connections",
    "dispatch",
    "connectionSetEdit",
    "removeTabData",
    "addProjectDevice",
    "removeProjectDevice",
    "addScannedProjectDevice",
    "clearProjectDevices",
    "addMastersIpToDevice",
    "updateScanData"
  ],
  dispatchers: [
    "topologyAction",
    "deviceActions",
    "exportStatus",
    "connectionsActions",
    "layoutActions",
    "communicationActions",
    "getObjectStateInterfaceData",
    "hideModal",
    "connectionSetEdit",
    "removeTabData",
    "addProjectDevice",
    "removeProjectDevice",
    "addScannedProjectDevice",
    "clearProjectDevices",
    "addMastersIpToDevice",
    "updateScanData",
    "modifySectionByName",
    "updateLayer",
    "updateBackground"
  ],
  subscriptions: [
    "id",
    "status",
    "title",
    "currentCommunicationStructure",
    "communicationStructures",
    "devicesNetworkData",
    "devicesList",
    "activeSelection",
    "source",
    "connections",
    "projectDevices",
    "background",
    "grid"
  ]
};

export const ZoomElementComponent = {
  nodeName: "Zoom Element Component",
  component: "ZoomElement",
  description: "",
  propTypes: [
    "zoomClass",
    "zoomInBtnClass",
    "zoomValue",
    "zoomOutBtnClass",
    "resetBtnClass",
    "iconZoomIn",
    "iconZoomOut",
    "iconZoomReset",
    "handleZoomIn",
    "handleZoomOut",
    "handleZoomReset",
    "vertical",
    "disabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const GoJSComponent = {
  nodeName: "GoJS Component",
  component: "ZoomElement",
  description: "",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const SlidingPanelRightSideComponent = {
  nodeName: "Sliding Panel Right Side Component",
  component: "SlidingPanel",
  description: "",
  propTypes: [
    "name",
    "dispatch",
    "position",
    "visibility",
    "data",
    "status",
    "source",
    "subtype",
    "setSectionStatus",
    "setSectionVisibility",
    "setSectionSource",
    "isMasterOnline",
    "isConnectedToPLC"
  ],
  dispatchers: ["setTabCommunicationStatus"],
  subscriptions: ["communicationStatus"]
};

export const SlidingPanelLeftSideComponent = {
  nodeName: "Sliding Panel Left Side Component",
  component: "SlidingPanel",
  description: "",
  propTypes: ["name", "dispatch", "position", "status", "visibility"],
  dispatchers: ["setTabCommunicationStatus"],
  subscriptions: ["communicationStatus"]
};

export const DeviceCatalogComponent = {
  nodeName: "Device Catalog Component",
  component: "DeviceCatalog",
  description: "",
  propTypes: [
    "translation",
    "devices",
    "layout",
    "devicesActions",
    "layoutActions",
    "dispatch"
  ],
  dispatchers: ["devicesActions", "layoutActions"],
  subscriptions: ["devices", "layout"]
};

export const DeviceCatalogSearch = {
  nodeName: "Device Catalog Search Component",
  component: "DeviceCatalogSearch",
  description: "",
  propTypes: ["translation", "devicesActions"],
  dispatchers: ["setListDevicesQuery"],
  subscriptions: []
};

export const DeviceImport = {
  nodeName: "DeviceImport Component",
  component: "DeviceImport",
  description: "",
  propTypes: ["translation", "showModal", "addModalBody", "devicesActions"],
  dispatchers: [
    "devicesActions",
    "showModal",
    "addModalBody",
    "changeAlertVisibility"
  ],
  subscriptions: []
};

export const DeviceCatalogFilter = {
  nodeName: "Device Catalog Filter Component",
  component: "DeviceCatalogFilter",
  description: "",
  propTypes: [
    "showModal",
    "hideModal",
    "translation",
    "vendors",
    "types",
    "categories",
    "devicesActions",
    "devicesList"
  ],
  dispatchers: [
    "getVendors",
    "getTypes",
    "getCategories",
    "getFilteredDevices"
  ],
  subscriptions: []
};

export const DeviceCatalogList = {
  nodeName: "Device Catalog List Component",
  component: "Device Catalog List",
  description: "",
  propTypes: [
    "devicesList",
    "devicesActions",
    "devicesListQuery",
    "filteredDevices",
    "types",
    "itemOnClick"
  ],
  dispatchers: [
    "clearListDevices",
    "clearListQuery",
    "clearFilterDevices",
    "getDevices"
  ],
  subscriptions: ["types"]
};

export const ProjectConfigurator = {
  nodeName: "ProjectConfigurator Component",
  component: "Project Configurator",
  description: "",
  propTypes: [
    "className",
    "dispatch",
    "communicationStructures",
    "currentCommunicationStructure",
    "title",
    "topologyId",
    "translation"
  ],
  dispatchers: [],
  subscriptions: [
    "communicationStructures",
    "currentCommunicationStructure",
    "title",
    "topologyId"
  ]
};

export const OutsideAlerter = {
  nodeName: "OutsideAlerter Component",
  component: "Outside Alerter",
  description: "",
  propTypes: ["children", "handleClickOutside"],
  dispatchers: [],
  subscriptions: []
};

export const WebviewElement = {
  nodeName: "WebviewElement Component",
  component: "WebviewElement",
  description: "",
  propTypes: ["src", "style", "btnText"],
  dispatchers: [],
  subscriptions: []
};

export const ModalLog = {
  nodeName: "ModalLog Component",
  component: "ModalLog",
  description: "",
  propTypes: ["getLog", "log", "translation", "changeModalClass"],
  dispatchers: ["getLog", "changeModalClass"],
  subscriptions: ["log"]
};

export const Button = {
  nodeName: "Button Component",
  component: "Button",
  description: "",
  propTypes: [
    "className",
    "text",
    "icon",
    "glyph",
    "fullWidth",
    "displayBlock",
    "smallIcon",
    "mediumIcon",
    "largeIcon",
    "disabled",
    "onClick"
  ],
  dispatchers: [],
  subscriptions: []
};

export const ScanManager = {
  nodeName: "ScanManager Component",
  component: "ScanManager",
  description: "",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const DevicesScanManager = {
  nodeName: "DevicesScanManager Component",
  component: "DevicesScanManager",
  description:
    "Scan devices manager for manage displaying scanned devices and selecting them.",
  propTypes: [
    "runDevicesScan",
    "dispatch",
    "handleStartScan",
    "handleScanWindowChange",
    "addModalTitle",
    "addModalFooter",
    "changeModalClass",
    "setScannedDevices",
    "clearScannedDevices",
    "addScannedDevice",
    "scannedDevices",
    "devicesCount",
    "physicalDevice",
    "physicalConnection",
    "protocolsToDisplay",
    "interfaces",
    "translation",
    "openTopology",
    "hideModal",
    "topologyProject",
    "currCommStruct",
    "pingDevices",
    "pingDevicesCount",
    "addPingData",
    "addPingSNMPData",
    "runSNMPBulk",
    "isSnmpComplete",
    "isPingComplete",
    "projectDevices",
    "addScannedProjectDevice",
    "currentStatus",
    "changeScanningStatus"
  ],
  dispatchers: [
    "runDevicesScan",
    "addModalTitle",
    "addModalBody",
    "addModalFooter",
    "changeModalClass",
    "setScannedDevices",
    "clearScannedDevices",
    "addScannedDevice",
    "updateScannedDevice",
    "getDeviceByIdVendorAndProduct",
    "openTopology",
    "hideModal",
    "dispatch",
    "addPingData",
    "addPingSNMPData",
    "runSNMPBulk",
    "addScannedProjectDevice",
    "changeScanningStatus"
  ],
  subscriptions: [
    "scannedDevices",
    "devicesCount",
    "communicationStructures",
    "physicalDevice",
    "physicalConnection",
    "topologyProject",
    "currCommStruct",
    "pingDevices",
    "pingDevicesCount",
    "isPingComplete",
    "isUdpComplete",
    "isSnmpComplete",
    "projectDevices",
    "currentStatus"
  ]
};

export const InterfacesScanManager = {
  nodeName: "InterfacesScanManager Component",
  component: "InterfacesScanManager",
  description:
    "Scan interfaces manager for manage displaying and selecting interfaces to scan.",
  propTypes: [
    "runInterfaceScan",
    "setDefaultNetworkRanges",
    "setDefaultProtocols",
    "setSelectedInterface",
    "scanDefaults",
    "handleStartScan",
    "handleScanWindowChange",
    "handleInterfacesUpdate",
    "addModalTitle",
    "addModalFooter",
    "changeModalClass",
    "clearScannedDevices",
    "translation"
  ],
  dispatchers: [
    "runInterfaceScan",
    "setDefaultNetworkRanges",
    "setDefaultProtocols",
    "setSelectedInterface",
    "addModalTitle",
    "addModalFooter",
    "changeModalClass",
    "clearScannedDevices",
    "dispatch"
  ],
  subscriptions: ["interfaces", "scanDefaults"]
};

export const InterfacesList = {
  nodeName: "InterfacesList Component",
  component: "InterfacesList",
  description: "A list component for displaying and selecting interfaces.",
  propTypes: ["scanListClassname", "interfaces", "handleInterfacesUpdate"],
  dispatchers: [],
  subscriptions: []
};

export const NoResultsView = {
  nodeName: "NoResultsView Component",
  component: "NoResultsView",
  description:
    "Graphic component for diplaying and icon with label containing information about no results where found",
  propTypes: ["translation"],
  dispatchers: [],
  subscriptions: []
};

export const SingleInterfaceList = {
  nodeName: "SingleInterfaceList Component",
  component: "SingleInterfaceList",
  description:
    "A list component for displaying and manage single interface item on the list.",
  propTypes: [
    "translation",
    "networkInterface",
    "interfaceListClassname",
    "handleInterfaceClick"
  ],
  dispatchers: [],
  subscriptions: []
};

export const CheckboxButton = {
  nodeName: "CheckboxButton Component",
  component: "CheckboxButton",
  description: "",
  propTypes: [
    "itemId",
    "itemName",
    "checkboxBtnClass",
    "labelClass",
    "handleCheckboxClick",
    "isChecked",
    "isDisabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const NetworkRangeInput = {
  nodeName: "NetworkRangeInput Component",
  component: "NetworkRangeInput",
  description: "Form field for network range input.",
  propTypes: [
    "componentId",
    "first",
    "last",
    "rangeFirst",
    "rangeLast",
    "containerClass",
    "handleInputsChange",
    "isDisabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const SimpleListHeader = {
  nodeName: "SimpleListHeader Component",
  component: "SimpleListHeader",
  description: "Graphic component for diplaying very simple header for lists",
  propTypes: ["headerClass", "titleClass", "heightAuto", "children", "title"],
  dispatchers: [],
  subscriptions: []
};

export const SimpleDottedProgress = {
  nodeName: "SimpleDottedProgress Component",
  component: "SimpleDottedProgress",
  description: "",
  propTypes: ["label", "className", "isActive"],
  dispatchers: [],
  subscriptions: []
};

export const DevicesList = {
  nodeName: "DevicesList Component",
  component: "DevicesList",
  description: "",
  propTypes: [
    "scanListClassname",
    "scanInProgress",
    "handleDeviceSelection",
    "handleDeviceNameClick",
    "translation",
    "devices",
    "devicesCount",
    "isPing"
  ],
  dispatchers: [],
  subscriptions: []
};

export const ListItemBackground = {
  nodeName: "ListItemBackground Component",
  component: "ListItemBackground",
  description: "",
  propTypes: [
    "existing",
    "className",
    "heightAuto",
    "isParent",
    "hasChildren",
    "solidBackground",
    "noBackground"
  ],
  dispatchers: [],
  subscriptions: []
};

export const Spinner = {
  nodeName: "Spinner Component",
  component: "Spinner",
  description: "An npm component",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const TabularViewDevices = {
  nodeName: "TabularViewDevices Component",
  component: "TabularViewDevices",
  description: "",
  propTypes: ["visibility", "translation", "devicesOnTopology"],
  dispatchers: [],
  subscriptions: ["devicesOnTopology"]
};

export const TabularViewConnections = {
  nodeName: "TabularViewConnections Component",
  component: "Spinner",
  description: "Includes tabular view components",
  propTypes: ["visibility", "translation"],
  dispatchers: [],
  subscriptions: []
};

export const FlatButton = {
  nodeName: "FlatButton Component",
  component: "FlatButton",
  description: "",
  propTypes: [
    "id",
    "btnClass",
    "btnTextClass",
    "btnWrapperClass",
    "icon",
    "text",
    "tooltip",
    "onClick",
    "dottedBorderBottom",
    "disabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const HiddenComponentAuthorization = {
  nodeName: "HiddenComponentAuthorization Component",
  component: "HiddenComponentAuthorization",
  description:
    "Gives feature to hide component or replace it with information message or another component passed in props.  Component is hidden based on a flag in access configuration file",
  propTypes: ["id", "roles"],
  dispatchers: [],
  subscriptions: []
};

export const WithAuthorization = {
  nodeName: "WithAuthorization Component",
  component: "WithAuthorization",
  description:
    "Creates an element used to replace an original component based on access config file.",
  propTypes: ["id", "msg", "ReplacementWrapper"],
  dispatchers: [],
  subscriptions: ["user"]
};

export const Dropzone = {
  nodeName: "Dropzone Component",
  component: "Dropzone",
  description: "Npm component https://github.com/okonet/react-dropzone",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const DeviceImportListItem = {
  nodeName: "DeviceImportListItem Component",
  component: "DeviceImportListItem",
  description: "",
  propTypes: ["status", "name"],
  dispatchers: [],
  subscriptions: []
};

export const DropzonePlaceholder = {
  nodeName: "DropzonePlaceholder Component",
  component: "DropzonePlaceholder",
  description: "",
  propTypes: ["heading", "subheading"],
  dispatchers: [],
  subscriptions: []
};

export const DropzoneLoading = {
  nodeName: "DropzoneLoading Component",
  component: "DropzoneLoading",
  description: "",
  propTypes: ["progress"],
  dispatchers: [],
  subscriptions: []
};

export const CircularProgressbar = {
  nodeName: "CircularProgressbar Component",
  component: "CircularProgressbar",
  description: "Npm component",
  propTypes: ["percentage"],
  dispatchers: [],
  subscriptions: []
};

export const FilterDevicesForm = {
  nodeName: "FilterDevicesForm Component",
  component: "FilterDevicesForm",
  description: "",
  propTypes: [
    "onSubmitFilter",
    "addModalFooter",
    "translation",
    "selectedFilters",
    "vendors",
    "categories",
    "types"
  ],
  dispatchers: ["addModalFooter"],
  subscriptions: []
};

export const FilterDevicesList = {
  nodeName: "FilterDevicesList Component",
  component: "FilterDevicesList",
  description: "",
  propTypes: [
    "title",
    "filterList",
    "handleOnChange",
    "selectedFilter",
    "handleClearingList",
    "handleSelectColumn",
    "clearFilterList"
  ],
  dispatchers: [],
  subscriptions: []
};

export const DeviceCatalogItem = {
  nodeName: "DeviceCatalogItem Component",
  component: "DeviceCatalogItem",
  description: "",
  propTypes: [
    "className",
    "device",
    "selected",
    "onClick",
    "isDragging",
    "connectDragSource",
    "connectDragPreview"
  ],
  dispatchers: [],
  subscriptions: []
};

export const BasicInputComponent = {
  nodeName: "BasicInputComponent Component",
  component: "BasicInputComponent",
  description: "",
  propTypes: [
    "label",
    "wrapperClass",
    "name",
    "type",
    "value",
    "onChange",
    "onBlur",
    "options",
    "checked",
    "disabled",
    "min",
    "placeholder"
  ],
  dispatchers: [],
  subscriptions: []
};

export const DeviceSummary = {
  nodeName: "DeviceSummary Component",
  component: "DeviceSummary",
  description: "",
  propTypes: ["translation", "data", "source", "dispatch"],
  dispatchers: [],
  subscriptions: []
};

export const ConnectionInfo = {
  nodeName: "ConnectionInfo Component",
  component: "ConnectionInfo",
  description: "",
  propTypes: [
    "data",
    "translation",
    "connections",
    "connectionSetEdit",
    "connection"
  ],
  dispatchers: ["connectionSetEdit"],
  subscriptions: ["connection", "connections"]
};

export const GenericTcpIpForm = {
  nodeName: "GenericTcpIpForm Component",
  component: "GenericTcpIpForm",
  description: "",
  propTypes: [
    "id",
    "translation",
    "initForm",
    "status",
    "createActiveElement",
    "updateDevice",
    "source",
    "device",
    "handleSubmitSuccess"
  ],
  dispatchers: ["createActiveElement", "updateDevice", "initForm"],
  subscriptions: []
};

export const SlidingPanelTopBar = {
  nodeName: "SlidingPanelTopBar Component",
  component: "SlidingPanelTopBar",
  description: "",
  propTypes: ["title", "translation", "isConnectedToPLC"],
  dispatchers: [],
  subscriptions: ["tabsContent"]
};

export const SlidingPanelTabs = {
  nodeName: "SlidingPanelTabs Component",
  component: "SlidingPanelTabs",
  description: "",
  propTypes: [
    "translation",
    "tabs",
    "status",
    "data",
    "dispatch",
    "setSectionStatus",
    "setActiveTab",
    "isMasterOnline",
    "source",
    "language"
  ],
  dispatchers: ["getSectionByName"],
  subscriptions: ["language"]
};

export const DeviceStatus = {
  nodeName: "DeviceStatus Component",
  component: "DeviceStatus",
  description: "",
  propTypes: ["status", "statusClass", "width", "isVertical"],
  dispatchers: [],
  subscriptions: []
};

export const MasterConfigurationForm = {
  nodeName: "MasterConfigurationForm Component",
  component: "MasterConfigurationForm",
  description: "",
  propTypes: [
    "translation",
    "device",
    "dispatch",
    "showIpField",
    "showDescriptionField",
    "showMacAddress"
  ],
  dispatchers: ["updateScanData"],
  subscriptions: []
};

export const ValidationComponent = {
  nodeName: "ValidationComponent Component",
  component: "ValidationComponent",
  description: "@balluf npm package",
  propTypes: ["handleChange", "method", "value", "finished"],
  dispatchers: [],
  subscriptions: []
};

export const TextArea = {
  nodeName: "TextArea Component",
  component: "TextArea",
  description: "",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const TextInput = {
  nodeName: "TextInput Component",
  component: "TextInput",
  description: "",
  propTypes: [
    "defaultValue",
    "containerClass",
    "inputClass",
    "labelClass",
    "icon",
    "disabled",
    "name",
    "placeholder",
    "text",
    "type",
    "onChange",
    "handleOnBlur",
    "inline",
    "thin",
    "error",
    "onError",
    "disableErrorTooltip",
    "id"
  ],
  dispatchers: [],
  subscriptions: []
};

export const CommonFormSection = {
  nodeName: "CommonFormSection Component",
  component: "CommonFormSection",
  description: "",
  propTypes: ["children", "headerText", "useOvalHeader"],
  dispatchers: [],
  subscriptions: []
};

export const Form = {
  nodeName: "Form Component",
  component: "Form",
  description: "",
  propTypes: [
    "id",
    "forms",
    "initForm",
    "setDefaultState",
    "setValidState",
    "children",
    "onSubmit"
  ],
  dispatchers: [
    "initForm",
    "callReset",
    "callSubmit",
    "setValidState",
    "setDefaultState"
  ],
  subscriptions: ["forms"]
};

export const FormFieldsGroup = {
  nodeName: "FormFieldsGroup Component",
  component: "FormFieldsGroup",
  description: "",
  propTypes: [
    "className",
    "children",
    "values",
    "fieldsData",
    "onChange",
    "onError"
  ],
  dispatchers: [],
  subscriptions: []
};

export const DisableAuthorization = {
  nodeName: "DisableAuthorization Component",
  component: "DisableAuthorization",
  description:
    "Sets enabled or disabled property on wrapped input component based on access configuration file.  Assigning boolean value to instance of wrapped component will overwrite default access rights.",
  propTypes: ["roles", "id"],
  dispatchers: [],
  subscriptions: []
};

export const RaisedButton = {
  nodeName: "RaisedButton Component",
  component: "RaisedButton",
  description: "",
  propTypes: [
    "btnClass",
    "text",
    "icon",
    "fullWidth",
    "displayBlock",
    "tooltip",
    "onClick",
    "disabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const SlidingPanelButton = {
  nodeName: "SlidingPanelButton Component",
  component: "SlidingPanelButton",
  description: "",
  propTypes: [
    "className",
    "classNames",
    "icon",
    "label",
    "onClick",
    "isDisabled"
  ],
  dispatchers: [],
  subscriptions: []
};

export const Tooltip = {
  nodeName: "Tooltip Component",
  component: "Tooltip",
  description: "React bootstrap component",
  propTypes: [
    "arrowOffsetLeft",
    "arrowOffsetTop",
    "bsSize",
    "bsStyle",
    "placement",
    "positionLeft",
    "positionTop"
  ],
  dispatchers: [],
  subscriptions: []
};

export const OverlayTrigger = {
  nodeName: "OverlayTrigger Component",
  component: "OverlayTrigger",
  description: "React bootstrap component",
  propTypes: [
    "overlay",
    "animation",
    "container",
    "containerPadding",
    "defaultOverlayShown",
    "delay",
    "delayHide",
    "delayShow",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "placement",
    "rootClose",
    "trigger"
  ],
  dispatchers: [],
  subscriptions: []
};

export const SlidingPanelTabsContent = {
  nodeName: "SlidingPanelTabsContent Component",
  component: "SlidingPanelTabsContent",
  description: "",
  propTypes: [
    "data",
    "language",
    "ioLinkRevision",
    "tabName",
    "activeTab",
    "deviceId"
  ],
  dispatchers: [],
  subscriptions: []
};

export const DeviceCommonInfo = {
  nodeName: "DeviceCommonInfo Component",
  component: "DeviceCommonInfo",
  description: "",
  propTypes: ["translation", "device", "expanded", "activeTab", "tabName"],
  dispatchers: [],
  subscriptions: []
};

export const DeviceGenericInfo = {
  nodeName: "DeviceGenericInfo Component",
  component: "DeviceGenericInfo",
  description: "",
  propTypes: [
    "translation",
    "isDisabled",
    "connectionParameters",
    "dispatch",
    "directParameters",
    "inputProcessData",
    "outputProcessData",
    "device",
    "getGenericLiveData",
    "communicationStatus",
    "setTabCommunicationStatus",
    "activeTab",
    "tabName"
  ],
  dispatchers: ["setTabCommunicationStatus", "getGenericLiveData"],
  subscriptions: ["communicationStatus"]
};

export const Parameters = {
  nodeName: "Parameters Component",
  component: "Parameters",
  description: "",
  propTypes: [
    "translation",
    "isDisabled",
    "connectionParameters",
    "dispatch",
    "readParameterData",
    "deviceId",
    "communicationStatus",
    "setTabCommunicationStatus"
  ],
  dispatchers: ["setTabCommunicationStatus"],
  subscriptions: ["readParameterData", "communicationStatus"]
};

export const TabsPanelBody = {
  nodeName: "TabsPanelBody Component",
  component: "TabsPanelBody",
  description: "",
  propTypes: [
    "data",
    "className",
    "translation",
    "headings",
    "deviceId",
    "tabName",
    "translations",
    "variableCollection",
    "processDataCollection",
    "connectionParameters",
    "source"
  ],
  dispatchers: [],
  subscriptions: []
};

export const TabsPanelRow = {
  nodeName: "TabsPanelRow Component",
  component: "TabsPanelRow",
  description: "",
  propTypes: [
    "element",
    "showAccessRights",
    "deviceId",
    "tabName",
    "translations",
    "language",
    "connectionParameters",
    "isInput",
    "isOutput",
    "source",
    "isProcessData",
    "tabsDevices",
    "variableName"
  ],
  dispatchers: [],
  subscriptions: ["tabsDevices", "language"]
};

export const DevicePropertyAccessRights = {
  nodeName: "DevicePropertyAccessRights Component",
  component: "DevicePropertyAccessRights",
  description: "",
  propTypes: ["accessRights"],
  dispatchers: [],
  subscriptions: []
};

export const DevicePropertyState = {
  nodeName: "DevicePropertyState Component",
  component: "DevicePropertyState",
  description: "",
  propTypes: ["state"],
  dispatchers: [],
  subscriptions: []
};

export const TabsPanelCell = {
  nodeName: "TabsPanelCell Component",
  component: "TabsPanelCell",
  description: "",
  propTypes: [
    "element",
    "className",
    "tabName",
    "addTabData",
    "name",
    "isEditable",
    "deviceId",
    "inputType",
    "content",
    "translations",
    "language",
    "connectionParameters",
    "dispatch",
    "communicationStatus",
    "state",
    "source",
    "isProcessData",
    "shouldAddTabData",
    "variableName",
    "translation"
  ],
  dispatchers: ["addTabData"],
  subscriptions: ["communicationStatus"]
};

export const TabularHeader = {
  nodeName: "TabularHeader Component",
  component: "TabularHeader",
  description: "",
  propTypes: ["header", "subtitle", "toolbar"],
  dispatchers: [],
  subscriptions: []
};

export const ImportTopologyForm = {
  nodeName: "ImportTopologyForm Component",
  component: "ImportTopologyForm",
  description: "",
  propTypes: [
    "translation",
    "addModalTitle",
    "openTopology",
    "hideModal",
    "updateBackground",
    "onSubmit",
    "currentCommunicationStructure"
  ],
  dispatchers: [
    "openTopology",
    "showModal",
    "hideModal",
    "addModalTitle",
    "addModalFooter",
    "changeModalClass",
    "updateBackground",
    "dispatch"
  ],
  subscriptions: ["currentCommunicationStructure"]
};

export const Import = {
  nodeName: "Import Component",
  component: "Import",
  description: "",
  propTypes: [
    "t",
    "alertClass",
    "alertMessage",
    "displayAlert",
    "title",
    "filesToAddText",
    "onDrop",
    "progress",
    "multiple",
    "canDrop",
    "displayDescription",
    "select",
    "progressBarVisible",
    "className"
  ],
  dispatchers: [],
  subscriptions: []
};

export const Alert = {
  nodeName: "Alert Component",
  component: "Alert",
  description: "React-bootstrap Component",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const ProgressBar = {
  nodeName: "ProgressBar Component",
  component: "ProgressBar",
  description: "React-bootstrap Component",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const Interpolate = {
  nodeName: "Interpolate Component",
  component: "Interpolate",
  description: "react-i18next component",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const WrappedComponent = {
  nodeName: "WrappedComponent Component",
  component: "WrappedComponent",
  description: "",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
};

export const ReactTable = {
  nodeName: "ReactTable Component",
  component: "ReactTable",
  description: "Npm component",
  propTypes: [],
  dispatchers: [],
  subscriptions: []
}