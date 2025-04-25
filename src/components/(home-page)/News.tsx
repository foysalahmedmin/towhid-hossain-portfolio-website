import news from "@/assets/data/news";
import pressReleases from "@/assets/data/pressReleases";
import { SectionComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Globe, Tag, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "../partials/Sections/HeroSection";

const sortByDate = (data = []) => {
  return data?.sort((a, b) => {
    const dateA = new Date(a?.date || "").getTime();
    const dateB = new Date(b?.date || "").getTime();

    return (dateB as number) - (dateA as number);
  });
};

const News = ({ className, isActive }: SectionComponentProps) => {
  const [newsTab, setNewsTab] = useState("All");
  const [isShow, setIsShow] = useState(false);
  const [isShowPress, setIsShowPress] = useState(false);

  const sortedNews = sortByDate(news);
  const sortedPressReleases = sortByDate(pressReleases);

  const featuredNews = sortedNews?.filter((news) => !!news?.isFeatured);

  const filteredNews =
    newsTab.toLocaleLowerCase() === "all"
      ? sortedNews
      : sortedNews?.filter(
          (news) =>
            news?.category.toLocaleLowerCase() === newsTab?.toLocaleLowerCase(),
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
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <HeroSection
        isActive={isActive}
        image="/images/news-banner.png"
        title="News & Updates"
        description="Stay informed about the latest developments, insights, and achievements in business leadership and digital transformation."
      />

      <div className="container mx-auto space-y-16 px-6 py-20">
        {/* Featured Article */}

        <div>
          <h2 className="mb-8 text-2xl font-bold">Featured Story</h2>
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
                  <div className="overflow-hidden rounded-2xl bg-card shadow-xl">
                    <div className="relative h-[32rem]">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/75 md:to-black/15"></div>
                      <div className="absolute bottom-0 left-0 px-6 py-12 text-white md:px-8">
                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                          <span className="w-fit rounded-e-full bg-primary px-3 py-1 text-sm md:rounded-full">
                            {news?.tags?.[0]}
                          </span>
                          <span className="flex items-center text-sm">
                            <Calendar className="mr-1 h-4 w-4" />
                            {news?.date}
                          </span>
                          {news?.author && (
                            <span className="flex items-center text-sm">
                              <User className="mr-1 h-4 w-4" />
                              {news.author}
                            </span>
                          )}
                        </div>
                        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                          {news?.title}
                        </h3>
                        <p className="mb-4 text-muted/50">{news?.excerpt}</p>
                        <div className="flex items-center space-x-4">
                          <a
                            href={news?.link}
                            className="flex items-center text-primary/75 hover:text-primary/25"
                          >
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
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

        <div>
          {/* Categories */}
          <div className="rounded-xl bg-card py-6 shadow-lg lg:hidden">
            <h3 className="mb-6 px-6 text-xl font-semibold">Categories</h3>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setNewsTab(category?.name)}
                  className={`flex cursor-pointer items-center justify-between px-6 py-2 ${
                    newsTab === category?.name
                      ? "bg-primary/25"
                      : "hover:bg-muted/25"
                  }`}
                >
                  <span className="flex items-start">
                    <Tag className="mr-2 mt-[0.125rem] h-5 w-5 shrink-0 text-primary" />
                    {category.name}
                  </span>
                  <span className="rounded-full bg-primary/5 px-2 py-1 text-sm text-primary">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
            <div className="space-y-8">
              {filteredNews
                .slice(0, isShow ? filteredNews?.length : 7)
                .map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl bg-card shadow-lg transition-transform hover:scale-[1.02]"
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
                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                          <span className="w-fit rounded-e-full bg-primary/5 px-3 py-1 text-sm text-primary md:rounded-full">
                            {item.tags?.[0]}
                          </span>
                          <span className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="mb-4 text-muted-foreground">
                          {item.excerpt}
                        </p>
                        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-4">
                          <div className="flex items-center gap-2 md:gap-4">
                            {item?.author && (
                              <span className="flex items-center text-sm text-muted-foreground">
                                <User className="mr-1 h-4 w-4" />
                                {item?.author}
                              </span>
                            )}
                            {item?.readTime && (
                              <span className="text-sm text-muted-foreground">
                                {item?.readTime}
                              </span>
                            )}
                          </div>
                          <a
                            href={item?.link}
                            target="_blank"
                            className="flex items-center text-primary"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {!isShow && filteredNews?.length > 7 && (
                <div className="mt-6">
                  <button
                    onClick={() => setIsShow(true)}
                    // className="flex w-full hover:underline items-center text-primary gap-4"
                    className="button bg-transparent shadow-md"
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
            <div className="hidden rounded-xl bg-card py-6 shadow-lg lg:block">
              <h3 className="mb-6 px-6 text-xl font-semibold">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => setNewsTab(category?.name)}
                    className={`flex cursor-pointer items-center justify-between px-6 py-2 ${
                      newsTab === category?.name
                        ? "bg-primary/25"
                        : "hover:bg-muted/25"
                    }`}
                  >
                    <span className="flex items-start">
                      <Tag className="mr-2 mt-[0.125rem] h-5 w-5 shrink-0 text-primary" />
                      {category.name}
                    </span>
                    <span className="rounded-full bg-primary/5 px-2 py-1 text-sm text-primary">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Releases */}
            <div className="rounded-xl bg-card py-6 shadow-lg">
              <h3 className="mb-6 px-6 text-xl font-semibold">
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
                      className="block cursor-pointer border-b border-muted/50 px-6 py-4 last:border-0 last:pb-0 hover:bg-muted/25"
                    >
                      <div className="mb-1 text-sm text-muted-foreground">
                        {new Date(release?.date || "")?.toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </div>
                      <h4 className="mb-2 font-semibold">{release.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {release.excerpt}
                      </p>
                    </Link>
                  ))}
                {!isShowPress && (
                  <div className="mt-6 px-6">
                    <button
                      onClick={() => setIsShowPress(true)}
                      className="flex w-full items-center gap-4 text-primary hover:underline"
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
            <div className="rounded-xl bg-card p-6 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 border-b border-muted/50 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="rounded-lg bg-primary/5 p-2">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{event.event}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <Globe className="mr-1 h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="mt-1 text-sm text-primary">
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
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/75 p-8 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest insights, news, and
              updates delivered directly to your inbox.
            </p>
            <div className="mx-auto flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 rounded-l-full px-4 py-2 focus:outline-none"
              />
              <button className="button rounded-r-full bg-primary text-primary-foreground">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
