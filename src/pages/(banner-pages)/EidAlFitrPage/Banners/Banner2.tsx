import full_frame from "/images/banners/eid-al-fitr/frames/2.png";

const Banner2 = ({ banner_ref, post, name, imageFile }) => {
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
          bottom: "5%",
          left: "24.55%",
          height: "10.4em",
          width: "9.9em",
          fontSize: "1em",
          // borderRadius: "999999px",
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
            // borderRadius: "999999px",
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
          bottom: "3%",
          left: "41.5%",
          // textShadow: "white 0px -2px 5px",
          height: "5.5em",
          fontSize: "1em",
        }}
      >
        <p
          style={{
            color: "#000000",
            margin: "0",
            marginBottom: "1.1em",
            padding: "0",
            fontWeight: "700",
            lineHeight: "0",
            fontSize: "2.5em",
          }}
        >
          {name}
        </p>
        <p
          style={{
            color: "#3e3e3e",
            fontWeight: "normal",
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

export default Banner2;
