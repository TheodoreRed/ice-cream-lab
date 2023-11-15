import "./Ad.css";

interface Props {
  flavor: string;
  isDark: boolean;
  adFont: number;
}

const Ad = (props: Props) => {
  return (
    <div className="Ad">
      <div
        className="design"
        style={
          !props.isDark
            ? {
                backgroundColor: "white",
                color: "black",
                border: "3px solid black",
              }
            : {}
        }
      >
        <p className="vote-for">Vote For</p>
        <p
          className="flavor caveat-font"
          style={{ fontSize: `${props.adFont}px` }}
        >
          {props.flavor}
        </p>
      </div>
    </div>
  );
};

export default Ad;
