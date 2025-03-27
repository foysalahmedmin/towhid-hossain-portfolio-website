import full_frame from "/images/banners/eid-al-fitr/frames/1.png";

const Banner1 = ({ banner_ref, post, name, imageFile }) => {
  return (
    <div
      ref={banner_ref}
      style={{
        width: "67em",
        position: "relative",
        display: "inline-block",
        margin: "auto",
        // filter: "grayscale(100%)",
        background: "#ffffff",
        fontFamily: "Hind Siliguri",
        fontSize: "1em",
      }}
    >
      <img style={{ width: "100%" }} src={full_frame} alt="" />
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "8%",
          height: "11.5em",
          width: "11.5em",
          fontSize: "1em",
          borderRadius: "999999px",
          // borderWidth: ".1em",
          // borderColor: "#000000",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${
              imageFile && URL.createObjectURL(imageFile)
            }')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "999999px",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "normal",
          position: "absolute",
          margin: "0",
          padding: "0",
          lineHeight: "0",
          bottom: "3.5%",
          left: "28.5%",
          // textShadow: "white 0px -2px 5px",
          height: "5.5em",
          fontSize: "1em",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            margin: "0",
            marginBottom: "1.1em",
            padding: "0",
            fontWeight: "600",
            lineHeight: "0",
            fontSize: "2.5em",
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: "#ffffff",
            fontWeight: "normal",
            fontFamily: "Hind Siliguri",
            margin: "0",
            padding: "0",
            lineHeight: "0",
            fontSize: "1.5em",
          }}
        >
          {post}
        </p>
      </div>
    </div>
  );
};

export default Banner1;
