import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner,
    faPlusCircle,
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faLock,
    faCodeBranch
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhoneAlt, faEnvelope, faMapMarkerAlt, faLock, faCodeBranch);
};

export default Icons;