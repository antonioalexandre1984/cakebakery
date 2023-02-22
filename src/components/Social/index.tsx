import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export function Social() {
  return (
    <ul>
      <li className="flex justify-center items-center">
        <a href="#" className="text-base">
          <FaFacebookSquare size={50} />
        </a>
        <a>
          <AiOutlineInstagram size={50} />
        </a>
        <a>
          <FaTwitterSquare size={50} />
        </a>
      </li>
    </ul>
  );
}
