import { IButton } from "../../core/interfaces";

const Button = (props: IButton) => {
  return (
    <button
      disabled={props.isLoading}
      type={!props.type ? "button" : props.type}
      onClick={() => props.onClick()}
      className={`${props.classNames} text-[11px] md:text-[13px] rounded-full text-white w-24 py-2 font-light`}
    >
      {props.isLoading ? "Please Wait..." : props.name}
    </button>
  );
};

export default Button;
