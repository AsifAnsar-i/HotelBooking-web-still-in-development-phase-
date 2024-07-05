import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const { register } = useFormContext<HotelFormData>();
  return <div>DetailsSection</div>;
};

export default DetailsSection;
