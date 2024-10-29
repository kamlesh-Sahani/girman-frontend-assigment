import { FaPhone } from "react-icons/fa6";
import "./card.css";
import { CiLocationOn } from "react-icons/ci";
import { type PersonType } from "../../types";
import profileImg from "../../assets/kamlesh.jpeg"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
const Card = ({ first_name, last_name, contact_number, city }: PersonType) => {
 
  return (
    <div className="card">
      <div className="img_box">
        <img src={profileImg} alt="profile_image" />
        <h1>
          {first_name} {last_name}
        </h1>
        <p>
          <CiLocationOn />
          {city}
        </p>
      </div>
      <div className="line"></div>
      <div className="detail_box">
        <div>
          <p className="phone_detail">
            <FaPhone /> {contact_number}
          </p>
          <p className="text_detail">Availabel on phone</p>
        </div>

        <Dialog>
          <DialogTrigger>
            <button>Fetch Details</button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {" "}
                <h1>
                  {first_name} {last_name}
                </h1>
              </DialogTitle>
              <div className="dialog_detail">
                <p>
                  Name: {first_name} {last_name}
                </p>
                <p>Location: {city}</p>
                <p>Contact: {contact_number}</p>
                <p>Profile image:</p>
                <img src={profileImg} alt="profile_image" />
              </div>
            </DialogHeader>
            <DialogTrigger>
              <button className="dialog_btn">Cancel</button>
            </DialogTrigger>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Card;
