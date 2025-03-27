import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { Download, FileBadge, ImagePlus, User } from "lucide-react";
import { createRef, useState } from "react";
import { isChrome, isFirefox, isSafari } from "react-device-detect";
import { toast } from "react-toastify";
import Banner1 from "./Banners/Banner1";
import Banner2 from "./Banners/Banner2";
import Banner3 from "./Banners/Banner3";
import Banner4 from "./Banners/Banner4";
import Banner5 from "./Banners/Banner5";
import Banner6 from "./Banners/Banner6";
import Banner7 from "./Banners/Banner7";
import Banner8 from "./Banners/Banner8";
import Banner9 from "./Banners/Banner9";

const EidAlFitrPage = () => {
  const bannerComponentsAndRefs = [
    {
      component: Banner1,
      ref: createRef(),
    },
    {
      component: Banner2,
      ref: createRef(),
    },
    {
      component: Banner3,
      ref: createRef(),
    },
    {
      component: Banner4,
      ref: createRef(),
    },
    {
      component: Banner5,
      ref: createRef(),
    },
    {
      component: Banner6,
      ref: createRef(),
    },
    {
      component: Banner7,
      ref: createRef(),
    },
    {
      component: Banner8,
      ref: createRef(),
    },
    {
      component: Banner9,
      ref: createRef(),
    },
  ];

  const bannerCommon_ref = createRef();

  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getImage = async () => {
    try {
      if (name && imageFile) {
        const current =
          bannerComponentsAndRefs[selectedBannerIndex].ref.current;
        if (current) {
          html2canvas(current as HTMLElement, {
            useCORS: true,
            scale: 3,
            allowTaint: true,
            logging: true,
          })
            .then((canvas) => {
              const imageDataURL = canvas.toDataURL("image/png");
              setTimeout(() => downloadScreenshot(imageDataURL), 100);
            })
            .catch((error) => {
              console.error("Error capturing screenshot:", error);
            });
        }
        const downloadScreenshot = (imageDataURL) => {
          saveAs(imageDataURL, `${name}.png`);
        };
        // await handleSave();
      } else {
        toast.warn("Please Check Name / Image / Division");
      }
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <>
      <div className="h-0 overflow-hidden">
        <div className="text-center">
          <div style={{ fontSize: "16px" }}>
            {bannerComponentsAndRefs.map((el, index) => (
              <div key={index} style={{ fontSize: "1em" }}>
                <el.component
                  banner_ref={el.ref}
                  name={name}
                  post={post}
                  imageFile={imageFile}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <section style={{ fontFamily: "Hind Siliguri" }} className="pb-14">
        <div className="container mt-3">
          <div className="mb-7">
            <div className="mx-auto max-w-[50rem] text-center">
              <p className="text-gradient mx-auto my-7 inline-block text-center text-xl font-bold text-black md:text-2xl">
                ঈদ মোবারক।
              </p>
              <h3 className="mb-6 text-red-700">
                ডাউনলোড করার পূর্বে নিচের যে কোনো একটি নমুনা চিহ্নিত করুন
              </h3>
            </div>
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 text-[4px] md:gap-6 md:text-[4px] lg:text-[6px] xl:text-[8px]">
                {bannerComponentsAndRefs.map((el, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedBannerIndex(index)}
                    style={{ fontSize: "1em", cursor: "pointer" }}
                    className={`${
                      selectedBannerIndex === index
                        ? "scale-105 border-primary opacity-100"
                        : "border-transparent opacity-75 hover:opacity-100 hover:shadow-xl"
                    } rounded-md border-4 p-2 transition-all`}
                  >
                    <el.component
                      banner_ref={bannerCommon_ref}
                      name={name}
                      post={post}
                      imageFile={imageFile}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shadow-center-2xl z-10 rounded-xl border-t-4 border-primary p-11">
            <div className="mb-4">
              <h3 className="text-2xl">
                ডিজিটাল ব্যানারের জন্য আপনার তথ্য দিন:
              </h3>
            </div>
            <form action="">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row">
                  <label
                    htmlFor="image"
                    className="flex cursor-pointer items-center gap-2 rounded-md border border-primary bg-primary bg-opacity-5 px-6 py-[14px]"
                  >
                    <ImagePlus className="text-xl" />
                    <span className="opacity-50">আপনার ছবি যুক্ত করুন</span>
                    <input
                      className="text-sm-lg hidden flex-1 bg-transparent outline-none"
                      type="file"
                      name="image"
                      onChange={(e) => setImageFile(e.target.files[0])}
                      id="image"
                      placeholder="সমর্থকের পদবি এবং স্থান"
                    />
                  </label>
                  <div className="grid flex-1 gap-4 md:grid-cols-2">
                    <label className="flex items-center gap-2 rounded-md border border-primary bg-primary bg-opacity-5 px-4 py-[14px]">
                      <label htmlFor="name">
                        <User className="text-xl" />
                      </label>
                      <input
                        className="text-sm-lg flex-1 bg-transparent outline-none"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        placeholder="আপনার নাম"
                      />
                    </label>
                    <label className="flex items-center gap-3 rounded-md border border-primary bg-primary bg-opacity-5 px-4 py-[14px]">
                      <label htmlFor="name">
                        <FileBadge className="text-xl" />
                      </label>
                      <input
                        className="text-sm-lg flex-1 bg-transparent outline-none"
                        type="text"
                        name="post"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        id="post"
                        placeholder="আপনার পদবি এবং স্থান"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={getImage}
                    disabled={
                      isLoading || (!isChrome && !isFirefox && !isSafari)
                    }
                    type="button"
                    className="primary-btn mt-6 flex items-center justify-center gap-2"
                  >
                    <span>ডাউনলোড করুন</span>
                    <Download className="text-xl" />
                  </button>
                </div>
                {!isChrome && !isFirefox && !isSafari && (
                  <p className="text-center text-red-400">
                    ছবিটি ডাউনলোড করতে অনুগ্রহ পূর্বক গুগল ক্রোম , সাফারি অথবা
                    মজিলা ফায়ারফক্স ব্যবহার করুন{" "}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EidAlFitrPage;
