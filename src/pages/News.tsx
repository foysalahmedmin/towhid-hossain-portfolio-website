import { ArrowRight, Calendar, Globe, Tag, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import news from "../assets/data/news";
import pressReleases from "../assets/data/pressReleases";

import "swiper/css";
import "swiper/css/navigation";

const sortByDate = (data = []) => {
  return data?.sort((a, b) => {
    const dateA = new Date(a?.date || "");
    const dateB = new Date(b?.date || "");

    return dateB - dateA;
  });
};

export default function News() {
  const [newsTab, setNewsTab] = useState("All");
  const [isShow, setIsShow] = useState(false);
  const [isShowPress, setIsShowPress] = useState(false);

  const sortedNews = sortByDate(news);
  const sortedPressReleases = sortByDate(pressReleases);
  // const sortedPressReleases = pressReleases;

  const featuredNews = sortedNews?.filter((news) => !!news?.isFeatured);

  const filteredNews =
    newsTab.toLocaleLowerCase() === "all"
      ? sortedNews
      : sortedNews?.filter(
          (news) =>
            news?.category.toLocaleLowerCase() === newsTab?.toLocaleLowerCase()
        );

  const upcomingEvents = [
    {
      date: "April 15, 2024",
      event: "Digital Transformation Summit",
      location: "New York",
      role: "Keynote Speaker",
    },
    {
      date: "April 20, 2024",
      event: "Global Business Forum",
      location: "London",
      role: "Panel Moderator",
    },
    {
      date: "May 5, 2024",
      event: "Innovation Leadership Conference",
      location: "Singapore",
      role: "Featured Speaker",
    },
  ];

  const categories = [
    { name: "All", count: 22 },
    { name: "Business Process Outsourcing", count: 5 },
    { name: "Entrepreneurship & Startups", count: 4 },
    { name: "International Collaboration", count: 1 },
    { name: "Economic Development", count: 4 },
    { name: "Technology & Media", count: 4 },
    { name: "Industry Discussions & Interviews", count: 4 },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="/news-banner.png"
          alt="Global Engagement"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/50"></div>
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Latest News & Updates</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Stay informed about the latest developments, insights, and
              achievements in business leadership and digital transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-20 space-y-16 mx-auto px-6">
        {/* Featured Article */}

        <div>
          <h2 className="text-2xl font-bold mb-8">Featured Story</h2>
          <div className="relative">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
            >
              {featuredNews?.map((news, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="relative h-[32rem]">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-center object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/75 md:to-black/15"></div>
                      <div className="absolute bottom-0 left-0 px-6 md:px-8 py-12 text-white">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                          <span className="bg-blue-600 w-fit px-3 py-1 rounded-e-full md:rounded-full text-sm">
                            {news?.tags?.[0]}
                          </span>
                          <span className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {news?.date}
                          </span>
                          {news?.author && (
                            <span className="flex items-center text-sm">
                              <User className="w-4 h-4 mr-1" />
                              {news.author}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {news?.title}
                        </h3>
                        <p className="text-gray-200 mb-4">{news?.excerpt}</p>
                        <div className="flex items-center space-x-4">
                          <a
                            href={news?.link}
                            className="flex items-center text-blue-400 hover:text-blue-300"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                          <span className="text-sm">{news?.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev invisible sm:visible"></div>
              <div className="swiper-button-next invisible sm:visible"></div>
            </Swiper>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="space-y-8">
              {filteredNews
                .slice(0, isShow ? filteredNews?.length : 7)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={item.image || "/news-demo.jpeg"}
                          alt={item.title}
                          className="h-48 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                          <span className="bg-blue-100 w-fit text-blue-600 px-3 py-1 rounded-e-full md:rounded-full text-sm">
                            {item.tags?.[0]}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between">
                          <div className="flex items-center gap-2 md:gap-4">
                            {item?.author && (
                              <span className="text-gray-500 text-sm flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {item?.author}
                              </span>
                            )}
                            {item?.readTime && (
                              <span className="text-gray-500 text-sm">
                                {item?.readTime}
                              </span>
                            )}
                          </div>
                          <a
                            href={item?.link}
                            target="_blank"
                            className="text-blue-600 hover:text-blue-700 flex items-center"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {!isShow && filteredNews?.length > 7 && (
                <div className=" mt-6">
                  <button
                    onClick={() => setIsShow(true)}
                    // className="flex w-full hover:underline items-center text-blue-600 gap-4"
                    className="inline-flex gap-2 hover:gap-4 transition-all duration-300 items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90"
                  >
                    {isShow ? <span>Show Less</span> : <span>More News</span>}
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white py-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold px-6 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => setNewsTab(category?.name)}
                    className={`flex items-center cursor-pointer justify-between py-2 px-6 ${
                      newsTab === category?.name
                        ? "bg-blue-300"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-start">
                      <Tag className="w-5 h-5 shrink-0 mr-2 mt-[0.125rem] text-blue-600" />
                      {category.name}
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Releases */}
            <div className="bg-white py-6 rounded-xl shadow-lg">
              <h3 className="text-xl px-6 font-semibold mb-6">
                Press Releases
              </h3>
              <div className="">
                {sortedPressReleases
                  .slice(0, isShowPress ? sortedPressReleases?.length : 6)
                  .map((release, index) => (
                    <Link
                      to={
                        release?.link || "/press-releases" + "/" + release?.id
                      }
                      target="_blank"
                      key={index}
                      className="border-b block border-gray-100 py-4 px-6 cursor-pointer hover:bg-gray-50 last:border-0 last:pb-0"
                    >
                      <div className="text-sm text-gray-500 mb-1">
                        {new Date(release?.date || "")?.toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </div>
                      <h4 className="font-semibold mb-2">{release.title}</h4>
                      <p className="text-gray-600 text-sm">{release.excerpt}</p>
                    </Link>
                  ))}
                {!isShowPress && (
                  <div className="px-6 mt-6">
                    <button
                      onClick={() => setIsShowPress(true)}
                      className="flex w-full hover:underline items-center text-blue-600 gap-4"
                    >
                      {isShowPress ? (
                        <span>Show Less</span>
                      ) : (
                        <span>More Press Releases</span>
                      )}
                      <ArrowRight className="size-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{event.event}</h4>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Globe className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="text-blue-600 text-sm mt-1">
                        {event.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest insights, news, and
              updates delivered directly to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-2 rounded-l-full text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-900 px-6 py-2 rounded-r-full hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
