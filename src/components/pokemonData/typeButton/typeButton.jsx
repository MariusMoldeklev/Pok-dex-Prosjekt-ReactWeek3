import { firstToUpperCase } from "../../../utils/firstToUpperCase";
import "./typeButton.css";

export function TypeButton(params) {
  const { type } = params;

  return (
    <div className={`TypeButton ${type}`}>
      <p>{firstToUpperCase(type)}</p>
    </div>
  );
}
