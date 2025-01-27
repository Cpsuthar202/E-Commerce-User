import { IAddress, IAddressErr } from "@/store/reducers/address/type";

export const validateFieldsforManageaddress = (data: IAddress) => {
  const err: IAddressErr = {};
  let isValid = true;

  if (!data?.name) {
    err.name = "Name is required";
    isValid = false;
  }

  if (!data?.mobile_no) {
    err.mobile_no = "Number is required";
    isValid = false;
  } else if (data.mobile_no.length < 10) {
    err.mobile_no = "Please enter a valid Number";
    isValid = false;
  }

  if (!data?.pincode) {
    err.pincode = "Pincode is required";
    isValid = false;
  } else if (data.pincode.length < 6) {
    err.pincode = "Please enter a valid pincode";
    isValid = false;
  }

  // if (!data.landmark) {
  //   err.landmark = "landmark is required";
  //   isValid = false;
  // }

  if (!data?.city) {
    err.city = "City is required";
    isValid = false;
  }
  if (!data?.state) {
    err.state = "State is required";
    isValid = false;
  }
  if (!data?.country) {
    err.country = "Country is required";
    isValid = false;
  }
  if (!data?.line_1) {
    err.line_1 = "line 1 is required";
    isValid = false;
  }
  // if (!data.apartment) {
  //   err.apartment = "Apartment is required";
  //   isValid = false;
  // }

  return { isValid, err };
};
