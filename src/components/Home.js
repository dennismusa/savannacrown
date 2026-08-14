/* eslint-disable no-unused-vars */
import React from "react";

import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaTiktok,  FaPhoneAlt,  FaEnvelope,  FaMapMarkerAlt, FaChevronUp,  FaArrowRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

//import cruiser1 from "../assets/cruiser1.jpg";
import home3 from "../assets/home3.jpg";
import weekends from "../assets/weekends.jpg";
import school from "../assets/school.jpg";
import team from "../assets/team.jpg";
import camping from "../assets/camping.jpg";
import adventure from "../assets/adventure.jpg";
import safaritour1 from "../assets/safaritour1.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import kenya1 from "../assets/kenya1.jpg";
import poster11 from "../assets/poster11.jpg";
import poster33 from "../assets/poster33.jpg";
import poster44 from "../assets/poster44.jpg";

import poster22 from "../assets/poster22.jpg";
import mombasa1 from "../assets/mombasa1.jpg";
import image2 from "../assets/image2.jpg";
import home2 from "../assets/home2.jpg";
import home5 from "../assets/home5.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import about from "../assets/about.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import home4 from "../assets/home4.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import sgr from "../assets/sgr.jpg";
import tanzania1 from "../assets/tanzania1.jpg";
import mombasa from "../assets/mombasa.jpg";
import malindi from "../assets/malindi.jpg";
import zanzibar from "../assets/zanzibar.jpg";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import serengeti from "../assets/serengeti.jpg";
import tanzania from "../assets/tanzania.jpg";
import schoolpos from "../assets/schoolpos.jpg";
import home1 from "../assets/home1.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";
function Home() {
  useLanguageSync();
  const images = [safaritour1,team,home5,image1];
  const [index, setIndex] = useState(0);
const aboutImages = [home3,image17,image16,nakuru,home1,home2];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);
const [selectedTrip, setSelectedTrip] = useState(null);

const [filters, setFilters] = useState({
  search: "",
  month: "",
  category: "",
  budget: "",
});

const trips = [
  {
    title: "Tembea Mombasa Weekend Getaway",
    month: "September",
    category: "Beach",
    budget: 9800,
    link: "https://wa.me/254720524627",
  },
 {
    title: "Salt Lick Safari Lodge",
    month: "December",
    category: "Safari",
    budget: 0,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Diamond Malindi",
    month: "September",
    category: "Beach",
    budget: 39500,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Trasha Falls & Nature Adventure",
    month: "September",
    category: "Adventure",
    budget: 2500,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Southern Palms Beach Resort - Diani",
    month: "December",
    category: "Beach",
    budget: 51000,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Azul Margarita Beach Resort - Mombasa",
    month: "December",
    category: "Beach",
    budget: 17000,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Amboseli National Park Group Joining",
    month: "Every Month",
    category: "Safari",
    budget: 0,
    link: "https://wa.me/254720524627",
  },
  {
    title: "Malindi & Watamu",
    month: "September",
    category: "Beach",
    budget: 18500,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Tanzania Moshi & Arusha",
    month: "October",
    category: "Safari",
    budget: 19500,
    link: "https://wa.me/254720524627",
  },

  {
    title: "Zanzibar & Dar es Salaam",
    month: "February",
    category: "Holiday",
    budget: 8499,
    link: "https://wa.me/254720524627",
  },

  {
    title: "SGR Holiday Package",
    month: "December",
    category: "Holiday",
    budget: 7500,
    link: "https://wa.me/254720524627",
  },
];

const filteredTrips = trips.filter((trip) => {
  const matchesSearch = trip.title
    .toLowerCase()
    .includes(filters.search.toLowerCase());

  const matchesMonth =
    !filters.month ||
    trip.month === filters.month;

  const matchesCategory =
    !filters.category ||
    trip.category === filters.category;

  const matchesBudget =
    !filters.budget ||
    trip.budget <= Number(filters.budget);

  return (
    matchesSearch &&
    matchesMonth &&
    matchesCategory &&
    matchesBudget
  );
});
const upcomingPosters = [
  {
  image: sgr,
  title: "SGR Holiday Package",
  date: "Coming Soon",
  duration: "Holiday Package",
  price: "Contact Us",
  description:
    "Enjoy a convenient and memorable holiday experience with SGR travel, comfortable accommodation, exciting sightseeing and carefully planned activities. Perfect for families, friends and group travelers looking for a stress-free Kenyan getaway."
},
  {
    image: malindi,
    title: "Malindi & Watamu Coastal Escape",
    date: "24 - 27 September 2026",
    duration: "4 Days / 3 Nights",
    price: "KSh 18,500",
    description:
      "Experience the beauty of the Kenyan coast with a memorable Malindi and Watamu getaway featuring stunning beaches, coastal adventures, sightseeing and unforgettable moments."
  },
{
  image: poster11,
  title: "Salt Lick Safari Lodge",
  date: "Until 21 December 2026",
  duration: "3 Days / 2 Nights",
  price: "Contact Us",
  description:
    "Enjoy a Madaraka Express safari package with accommodation, meals, return SGR tickets, transfers, swimming, complimentary game drives and a heritage tour at the Taita Museum."
},

{
  image: poster22,
  title: "Diamond Malindi",
  date: "1-30 September 2026",
  duration: "3 Nights",
  price: "KSh 39,500",
  description:
    "Pay for 2 nights and stay for 3 nights. Includes accommodation, all-inclusive meals, drinks, return SGR tickets, transfers and access to hotel facilities."
},

{
  image: poster33,
  title: "Trasha Falls & Nature Adventure",
  date: "6 September 2026",
  duration: "1 Day",
  price: "KSh 2,500",
  description:
    "A nature adventure in Murang'a featuring a waterfall hike, river experience, photography opportunities and return transport from Nairobi."
},

{
  image: poster44,
  title: "Southern Palms Beach Resort - Diani",
  date: "Until 21 December 2026",
  duration: "3 Days / 2 Nights",
  price: "KSh 51,000",
  description:
    "An all-inclusive Diani holiday package with accommodation, meals, drinks, SGR tickets, transfers, entertainment and beach access."
},

{
  image: mombasa1,
  title: "Azul Margarita Beach Resort - Mombasa",
  date: "Until 21 December 2026",
  duration: "3 Days / 2 Nights",
  price: "KSh 17,000",
  description:
    "A Mombasa holiday package including accommodation, meals, SGR tickets and return transfers."
},

{
  image: kenya1,
  title: "Amboseli National Park Group Joining",
  date: "Every Friday",
  duration: "3 Days / 2 Nights",
  price: "Contact Us",
  description:
    "Group safari to Amboseli National Park including accommodation, transport in a 4x4 vehicle, meals, game drives, drinking water and a professional guide."
},
  {
    image: mombasa,
    title: "Tembea Mombasa Weekend Getaway",
    date: "18 - 20 September 2026",
    duration: "3 Days / 2 Nights",
    price: "KSh 9,800",
    description:
      "Discover the vibrant coastal charm of Mombasa on an exciting weekend getaway filled with beautiful beaches, sightseeing, culture, relaxation and memorable experiences."
  },

  {
    image: tanzania1,
    title: "Tanzania Moshi & Arusha Adventure",
    date: "9 - 11 October 2026",
    duration: "3 Days / 2 Nights",
    price: "KSh 19,500",
    description:
      "Cross the border into Tanzania and explore the incredible destinations of Moshi and Arusha through an exciting group adventure filled with culture, scenery and unforgettable experiences."
  },

  {
    image: zanzibar,
    title: "Zanzibar & Dar es Salaam Escape",
    date: "10 - 14 February 2027",
    duration: "5 Days / 4 Nights",
    price: "KSh 8,499 by Road",
    flightPrice: "KSh 98,499 One-Way Flight",
    description:
      "Experience an unforgettable Tanzanian coastal adventure combining Zanzibar and Dar es Salaam, with beautiful beaches, island experiences, vibrant culture and spectacular coastal scenery."
  }
];

const [search, setSearch] = useState("");
const [posterIndex, setPosterIndex] = useState(0);


useEffect(() => {
  const slider = setInterval(() => {
    setPosterIndex(
      (prev) => (prev + 1) % upcomingPosters.length
    );
  }, 5000);

  return () => clearInterval(slider);
}, [upcomingPosters.length]);
  // ================= SLIDER =================
  useEffect(()=>{

const slider=setInterval(()=>{

// HERO SLIDER
setIndex(prev=>(prev + 1) % images.length);

// ABOUT SLIDER
setAboutIndex(prev=>(prev + 1) % aboutImages.length);
setSmallAboutIndex(prev=>(prev + 1) % aboutImages.length);

},4000);



    return () => clearInterval(slider);
  }, [aboutImages.length, images.length]);

  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">


      
<section
  id="home"
  className="relative min-h-[65vh] sm:min-h-[75vh] lg:h-[80vh] flex items-center overflow-hidden"
>
  {/* Background Slider */}
  <div className="absolute inset-0">
    {images.map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 transition-all duration-[3500ms] ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1)" : "scale(1.05)",
        }}
      />
    ))}
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#04140E]/95 via-[#04140E]/70 to-transparent" />

  {/* Glow */}
  <div className="absolute -left-32 top-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
  <div className="absolute right-0 bottom-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-yellow-400/10 rounded-full blur-[120px]" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">

    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">

        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />

        <span className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[4px] text-yellow-300 font-semibold">
          Savanna Crown Safaris
        </span>

      </div>

      {/* Heading */}
      <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">

        Explore Kenya

        <span className="block text-yellow-400">
          Together.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 text-gray-200 max-w-xl">

        Join exciting road trips, hiking adventures, camping weekends,
        beach escapes and unforgettable group experiences across Kenya.
        Meet new friends and discover breathtaking destinations with
        Savanna Crown Safaris Africa.

      </p>

      {/* Buttons */}
      

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 max-w-md">

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-400">
            50+
          </h3>
          <p className="text-[11px] sm:text-sm text-gray-300">
            Trips Organized
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-400">
            5K+
          </h3>
          <p className="text-[11px] sm:text-sm text-gray-300">
            Happy Travelers
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-400">
            20+
          </h3>
          <p className="text-[11px] sm:text-sm text-gray-300">
            Destinations
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Slider Dots */}
  <div className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">

    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`transition-all duration-500 rounded-full ${
          i === index
            ? "h-10 w-2 bg-yellow-400"
            : "h-2 w-2 bg-white/40 hover:bg-white"
        }`}
      />
    ))}

  </div>

  {/* Scroll Indicator */}
  

</section>

{/* Search */}
<section className="-mt-10 relative z-30 px-4 pb-16">

  <div className="max-w-6xl mx-auto">

    <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-8">

      {/* Search Hint */}

      <div className="flex items-center gap-2 mb-6">

        <span className="animate-pulse text-[#0B6E4F]">
          🔍
        </span>

        <p className="text-sm text-gray-500">
          Search by destination, travel date, category, or budget.
        </p>

      </div>

      {/* Filters */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Destination */}

        <div className="relative">

          <input
            type="text"
            placeholder="📍 Destination"
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            className="
              w-full
              h-14
              border
              rounded-2xl
              px-4
              outline-none
              focus:border-[#0B6E4F]
              focus:ring-2
              focus:ring-[#0B6E4F]/20
            "
          />

        </div>

        {/* Date */}

        <input
          type="date"
          className="
            h-14
            border
            rounded-2xl
            px-4
            outline-none
            focus:border-[#0B6E4F]
            focus:ring-2
            focus:ring-[#0B6E4F]/20
          "
        />

        {/* Category */}

        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({
              ...filters,
              category: e.target.value,
            })
          }
          className="
            h-14
            border
            rounded-2xl
            px-4
            outline-none
            focus:border-[#0B6E4F]
          "
        >
          <option value="">
            🏕️ Category
          </option>

          <option value="Beach">
            Beach
          </option>

          <option value="Safari">
            Safari
          </option>

          <option value="Holiday">
            Holiday
          </option>

          <option value="Adventure">
            Adventure
          </option>

        </select>

        {/* Budget */}

        <select
          value={filters.budget}
          onChange={(e) =>
            setFilters({
              ...filters,
              budget: e.target.value,
            })
          }
          className="
            h-14
            border
            rounded-2xl
            px-4
            outline-none
            focus:border-[#0B6E4F]
          "
        >
          <option value="">
            💰 Budget
          </option>

          <option value="5000">
            Under KSh 5,000
          </option>

          <option value="10000">
            Under KSh 10,000
          </option>

          <option value="20000">
            Under KSh 20,000
          </option>

          <option value="50000">
            Under KSh 50,000
          </option>

        </select>

      </div>

      {/* Action Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 mt-5">

        <button
          className="
            flex-1
            h-14
            rounded-2xl
            bg-[#0B6E4F]
            text-white
            font-bold
            hover:bg-[#084c39]
            transition
          "
        >
          Search Trips
        </button>

        <button
          onClick={() =>
            setFilters({
              search: "",
              month: "",
              category: "",
              budget: "",
            })
          }
          className="
            flex-1
            h-14
            rounded-2xl
            border
            font-bold
            hover:bg-gray-50
            transition
          "
        >
          Clear Filters
        </button>

      </div>

      {/* Results */}

      {(filters.search ||
        filters.category ||
        filters.budget) && (

        <div className="mt-10">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

            <h3 className="text-2xl font-bold">
              Available Trips
            </h3>

            <span className="text-[#0B6E4F] font-semibold">

              {filteredTrips.length} trips found

            </span>

          </div>

          {filteredTrips.length > 0 ? (

            <div className="grid gap-4">

              {filteredTrips.map((trip, index) => (

                <button
                  key={index}
                  onClick={() => {

                    const poster = upcomingPosters.find(
                      (item) =>
                        item.title
                          .toLowerCase()
                          .includes(
                            trip.title
                              .split(" ")[0]
                              .toLowerCase()
                          )
                    );

                    setSelectedTrip(poster);

                  }}
                  className="
                    p-5
                    border
                    rounded-3xl
                    text-left
                    hover:border-[#0B6E4F]
                    hover:shadow-xl
                    transition
                  "
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                      <h3 className="font-bold text-lg">

                        {trip.title}

                      </h3>

                      <p className="text-gray-500 mt-1">

                        {trip.category}

                      </p>

                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">

                      <div className="font-black text-xl text-[#0B6E4F]">

                        KSh {trip.budget.toLocaleString()}

                      </div>

                      <span className="text-sm font-semibold">

                        View details →

                      </span>

                    </div>

                  </div>

                </button>

              ))}

            </div>

          ) : (

            <div className="py-10 text-center">

              <p className="text-gray-500">

                No matching trips found.

              </p>

            </div>

          )}

        </div>

      )}

    </div>

  </div>

</section>
      {/* ABOUT / EXPERIENCE SECTION */}
{/* ABOUT / EXPERIENCE SECTION */}
{/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative py-32 bg-gradient-to-b from-white via-[#F7FAF8] to-[#EEF8F2] overflow-hidden"
>
  {/* Background Decoration */}
  <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-emerald-200/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">

        <div className="overflow-hidden rounded-[35px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          <img
  src={about}
  alt="Savanna Crown Safaris"
  className="w-full h-[650px] object-cover hover:scale-110 transition duration-700"
/>

        </div>

        {/* Floating Experience Card */}

        <div className="absolute -bottom-8 -right-6 bg-white rounded-3xl p-7 shadow-2xl border border-gray-100">

          <h2 className="text-5xl font-black text-[#0B6E4F]">

            10+

          </h2>

          <p className="mt-2 text-gray-600">

            Years of
            <br />
            Excellence

          </p>

        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div>

        <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] font-semibold">

          👑 About Savanna Crown

        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

          Discover Africa

          <span className="block text-[#0B6E4F]">

            In Royal Comfort

          </span>

        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8">

          Savanna Crown Safaris creates unforgettable journeys across
          Kenya and East Africa. From wildlife safaris and luxury
          holidays to corporate travel and tailor-made adventures,
          every trip is carefully crafted to deliver comfort,
          authenticity and lifelong memories.

        </p>

        {/* Features */}

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {[
            "Wildlife Safaris",
            "Luxury Holidays",
            "Corporate Travel",
            "Airport Transfers",
            "Expert Local Guides",
            "Custom Itineraries",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0B6E4F]">

                ✓

              </div>

              <span className="font-semibold text-gray-700">

                {item}

              </span>

            </div>

          ))}

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-3 gap-6 mt-12">

          <div>

            <h3 className="text-4xl font-black text-[#D4AF37]">

              500+

            </h3>

            <p className="text-gray-500">

              Travelers

            </p>

          </div>

          <div>

            <h3 className="text-4xl font-black text-[#D4AF37]">

              50+

            </h3>

            <p className="text-gray-500">

              Tours

            </p>

          </div>

          <div>

            <h3 className="text-4xl font-black text-[#D4AF37]">

              24/7

            </h3>

            <p className="text-gray-500">

              Support

            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-12 flex gap-5">

          

        </div>

      </div>

    </div>

  </div>
</section>


{/* ================= UPCOMING TRIPS POSTER SLIDER ================= */}

{/* ================= UPCOMING TRIPS ================= */}
{/* ================= ADVANCED UPCOMING TRIPS ================= */}

{/* ================= ADVANCED UPCOMING TRIPS ================= */}

<section
  id="upcomingtrips"
  className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F7F8F5] via-white to-[#F1F5F2] overflow-hidden"
>
  {/* Background Effects */}
  <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-emerald-400/10 rounded-full blur-[140px]" />
  <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-yellow-400/10 rounded-full blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">

      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px]">
        <span className="w-2 h-2 rounded-full bg-[#0B6E4F] animate-pulse" />
        Upcoming Adventures
      </span>

      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Your Next Adventure
        <span className="block text-[#0B6E4F]">
          Starts Here
        </span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-7">
        Discover exciting group trips, weekend getaways, hiking adventures
        and unforgettable escapes across Kenya.
      </p>

    </div>


    {/* ================= SLIDER ================= */}

    <div className="relative group">

      {/* Previous Button */}

      <button
        onClick={() =>
          setPosterIndex(
            posterIndex === 0
              ? upcomingPosters.length - 1
              : posterIndex - 1
          )
        }
        aria-label="Previous trip"
        className="hidden md:flex absolute left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-xl items-center justify-center text-[#0B6E4F] text-xl hover:bg-[#0B6E4F] hover:text-white hover:scale-110 transition-all duration-300"
      >
        ←
      </button>


      {/* ================= SLIDER WINDOW ================= */}

      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] md:rounded-[38px] shadow-2xl bg-[#07150F]">

        <div
          className="flex transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${posterIndex * 100}%)`
          }}
        >

          {upcomingPosters.map((trip, index) => (

            <div
              key={index}
              className="min-w-full relative"
            >

              {/* ================= POSTER AREA ================= */}

              <div className="relative h-[500px] sm:h-[540px] md:h-[600px] lg:h-[650px] xl:h-[700px] overflow-hidden bg-[#07150F]">

                {/* Blurred Poster Background */}

                <img
                  src={trip.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35"
                />

                {/* Dark Background Overlay */}

                <div className="absolute inset-0 bg-black/45" />


                {/* Main Poster */}

                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-10 xl:p-12">

                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-[1200ms] group-hover:scale-[1.015]"
                  />

                </div>


                {/* Top Gradient */}

                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />


                {/* Bottom Gradient */}

                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />


                {/* ================= TOP BADGE ================= */}

                <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 md:top-8 md:left-8 md:right-8 flex items-start justify-between gap-4 z-20">

                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 text-white text-[9px] sm:text-xs font-bold uppercase tracking-wider">

                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

                    Upcoming Trip

                  </div>


                  {/* Counter */}

                  <div className="px-3 sm:px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-bold">

                    {String(index + 1).padStart(2, "0")}

                    <span className="mx-1 text-white/40">
                      /
                    </span>

                    {String(upcomingPosters.length).padStart(2, "0")}

                  </div>

                </div>


                {/* ================= CONTENT ================= */}

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 md:p-10 lg:p-12 xl:p-14">

                  {/* Date */}

                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded-full text-[9px] sm:text-xs md:text-sm font-black shadow-lg">

                    <span>
                      📅
                    </span>

                    {trip.date}

                  </div>


                  {/* Title */}

                  <h3 className="mt-4 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08]">

                    {trip.title}

                  </h3>


                  {/* Description */}

                  <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-gray-200 leading-6 sm:leading-7 line-clamp-3">

                    {trip.description}

                  </p>


                  {/* ================= INFO ================= */}

                  <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">

                    {/* Price */}

                    <div>

                      <p className="text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-[2px]">
                        Starting From
                      </p>

                      <p className="mt-1 text-lg sm:text-xl md:text-2xl font-black text-yellow-400">
                        {trip.price}
                      </p>

                    </div>


                    {/* Divider */}

                    <div className="hidden sm:block w-px h-10 bg-white/20" />


                    {/* Duration */}

                    <div>

                      <p className="text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-[2px]">
                        Duration
                      </p>

                      <p className="mt-1 text-sm sm:text-base font-bold text-white">
                        {trip.duration}
                      </p>

                    </div>


                    {/* CTA */}

                    <a
  href="https://wa.me/254720524627?text=Hello%20Savanna%20Crown%20Safaris%20Africa%2C%20I%27m%20interested%20in%20booking%20an%20upcoming%20trip."
  target="_blank"
  rel="noopener noreferrer"
  className="sm:ml-auto inline-flex items-center justify-center gap-3 bg-[#0B6E4F] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-xl hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
>
  Reserve Your Seat
  <span className="text-lg">→</span>
</a>

                  </div>

                </div>

              </div>


              {/* ================= PROGRESS ================= */}

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">

                <div
                  className="h-full bg-yellow-400 transition-all duration-700"
                  style={{
                    width: `${((index + 1) / upcomingPosters.length) * 100}%`
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= NEXT BUTTON ================= */}

      <button
        onClick={() =>
          setPosterIndex(
            (posterIndex + 1) % upcomingPosters.length
          )
        }
        aria-label="Next trip"
        className="hidden md:flex absolute right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-xl items-center justify-center text-[#0B6E4F] text-xl hover:bg-[#0B6E4F] hover:text-white hover:scale-110 transition-all duration-300"
      >
        →
      </button>

    </div>


    {/* ================= MOBILE CONTROLS ================= */}

    <div className="flex md:hidden justify-center gap-4 mt-5">

      <button
        onClick={() =>
          setPosterIndex(
            posterIndex === 0
              ? upcomingPosters.length - 1
              : posterIndex - 1
          )
        }
        aria-label="Previous trip"
        className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 text-[#0B6E4F] flex items-center justify-center active:scale-90 transition"
      >
        ←
      </button>

      <button
        onClick={() =>
          setPosterIndex(
            (posterIndex + 1) % upcomingPosters.length
          )
        }
        aria-label="Next trip"
        className="w-10 h-10 rounded-full bg-[#0B6E4F] shadow-lg text-white flex items-center justify-center active:scale-90 transition"
      >
        →
      </button>

    </div>


    {/* ================= DOTS ================= */}

    <div className="flex justify-center items-center gap-2 mt-5">

      {upcomingPosters.map((_, index) => (

        <button
          key={index}
          onClick={() => setPosterIndex(index)}
          aria-label={`Go to trip ${index + 1}`}
          className={`h-2 rounded-full transition-all duration-500 ${
            posterIndex === index
              ? "w-8 bg-[#0B6E4F]"
              : "w-2 bg-gray-300 hover:bg-gray-400"
          }`}
        />

      ))}

    </div>


    {/* ================= BOTTOM LINK ================= */}

    <div className="flex justify-center mt-7">

      <Link
        to="/upcomingtrips"
        className="inline-flex items-center gap-2 text-sm sm:text-base text-[#0B6E4F] font-bold hover:text-[#D4AF37] transition-all duration-300 group/link"
      >

        View All Upcoming Trips

        <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
          →
        </span>

      </Link>

    </div>

  </div>

</section>



{/* ================= SERVICES ================= */}
<section
  id="services"
  className="relative py-28 bg-gradient-to-b from-[#F8F9F6] via-white to-[#F4F8F5] overflow-hidden"
>
  {/* Background Effects */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[180px]" />
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-[180px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] text-sm font-bold uppercase tracking-[3px]">
        ✨ What We Offer
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
        Adventures Designed
        <span className="block text-[#0B6E4F]">
          Around Great Experiences
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Every trip is carefully organized to give you memorable experiences,
        comfortable travel, professional guides and an amazing community of
        fellow adventurers exploring Kenya together.
      </p>

    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

      {[
        {
          title: "Group Road Trips",
          image: adventure,
          icon: "🚌",
          badge: "Most Popular",
          audience: "Friends • Solo Travelers • Couples",
          description:
            "Travel with like-minded adventurers on exciting road trips across Kenya. Discover hidden gems, enjoy scenic drives and create unforgettable memories together.",
          features: [
            "Luxury Tourist Van",
            "Professional Tour Guide",
            "Photography Stops",
            "Fun Group Activities",
          ],
        },
        {
          title: "Weekend Getaways",
          image: weekends,
          icon: "🌄",
          badge: "Weekend Escape",
          audience: "Families • Couples",
          description:
            "Take a break from your busy schedule and enjoy carefully planned weekend escapes featuring wildlife, lakes, beaches and breathtaking landscapes.",
          features: [
            "Hotel Accommodation",
            "Meals Included",
            "Comfortable Transport",
            "Guided Excursions",
          ],
        },
        {
          title: "Camping Adventures",
          image: camping,
          icon: "⛺",
          badge: "Outdoor Experience",
          audience: "Adventure Lovers",
          description:
            "Reconnect with nature through exciting camping experiences featuring bonfires, hiking, storytelling and unforgettable nights under the stars.",
          features: [
            "Camping Equipment",
            "Bonfire Sessions",
            "Nature Walks",
            "Professional Guides",
          ],
        },
        {
          title: "Corporate Team Building",
          image: team,
          icon: "🤝",
          badge: "Corporate",
          audience: "Companies & Organizations",
          description:
            "Boost teamwork and morale through engaging outdoor activities, leadership challenges and customized corporate retreat experiences.",
          features: [
            "Team Challenges",
            "Leadership Activities",
            "Conference Options",
            "Professional Facilitators",
          ],
        },
        {
          title: "Mountain Hiking",
          image: climbingkenya,
          icon: "🥾",
          badge: "Adventure",
          audience: "Hiking Enthusiasts",
          description:
            "Explore Kenya's spectacular mountains and hiking trails with experienced guides while enjoying breathtaking viewpoints and fresh mountain air.",
          features: [
            "Certified Guides",
            "Safety Support",
            "Refreshments",
            "Photography Moments",
          ],
        },
        {
          title: "Educational School Trips",
          image: school,
          icon: "🎒",
          badge: "Educational",
          audience: "Schools & Institutions",
          description:
            "Interactive educational excursions combining wildlife conservation, geography, history and outdoor learning in a safe environment.",
          features: [
            "Educational Programs",
            "Museums & Parks",
            "Student Activities",
            "Safe Transport",
          ],
        },
      ].map((service) => (

        <div
          key={service.title}
          className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500"
        >

          {/* Top Image */}
          <div className="relative h-64 overflow-hidden">

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <span className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 text-white text-xs uppercase tracking-widest">
              {service.badge}
            </span>

            <div className="absolute bottom-5 left-5 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-3xl">
              {service.icon}
            </div>

          </div>

          {/* Content */}
          <div className="p-8">

            <h3 className="text-2xl font-black text-gray-900">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              {service.description}
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4">

              {service.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#0B6E4F] font-bold">
                    ✓
                  </div>

                  <span className="text-gray-700">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            {/* Bottom Info */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Perfect For
                </p>

                <h4 className="mt-1 font-semibold text-[#0B6E4F]">
                  {service.audience}
                </h4>

              </div>

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0B6E4F] to-[#138C63] flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

            </div>

          </div>

          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0B6E4F] via-[#D4AF37] to-[#0B6E4F] group-hover:w-full transition-all duration-700"></div>

        </div>

      ))}

    </div>

  </div>
</section>


{/* ================= SCHOOL TRIPS ================= */}
<section
  id="school-trips"
  className="py-24 bg-gradient-to-b from-white to-[#F6FAF8]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] font-bold uppercase tracking-wider text-sm">
          School Trips
        </span>

        <h2 className="mt-6 text-5xl font-black text-gray-900">

          Learn.
          <span className="text-[#D4AF37]"> Explore.</span>
          <br />
          Grow Together.

        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">

          Give your students more than a classroom experience.
          Our educational road trips combine wildlife,
          nature, teamwork and adventure to create unforgettable
          learning experiences.

        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {[
            "Safe & Reliable",
            "Educational Value",
            "Affordable Packages",
            "Fully Coordinated",
            "Professional Guides",
            "Transport Included"
          ].map((item)=>(

            <div
              key={item}
              className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md"
            >

              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#0B6E4F] font-bold">
                ✓
              </div>

              <span className="font-semibold text-gray-700">
                {item}
              </span>

            </div>

          ))}

        </div>

        <div className="mt-10 flex gap-4">

         

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <img
          src={schoolpos}
          alt="School Trip"
          className="rounded-[30px] shadow-2xl w-full h-[600px] object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-white rounded-3xl shadow-xl px-8 py-6">

          <h3 className="text-4xl font-black text-[#0B6E4F]">
            500+
          </h3>

          <p className="text-gray-600">
            Students Travelled
          </p>

        </div>

      </div>

    </div>

    {/* Bottom Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {[
        {
          icon:"🎓",
          title:"Educational Tours",
          desc:"Museum visits, wildlife education and cultural learning."
        },
        {
          icon:"🦒",
          title:"Wildlife Experience",
          desc:"National parks, game drives and conservation learning."
        },
        {
          icon:"🤝",
          title:"Team Building",
          desc:"Outdoor games, leadership and collaboration activities."
        },
        {
          icon:"🎯",
          title:"Fun Activities",
          desc:"Adventure parks, hiking and memorable experiences."
        }
      ].map((card)=>(

        <div
          key={card.title}
          className="rounded-3xl bg-white shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
        >

          <div className="text-5xl">
            {card.icon}
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {card.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            {card.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>




{/* WHY TRAVEL WITH US */}
<section className="py-24 bg-[#102315] text-white relative overflow-hidden">

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        {t("whyChooseUs")}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {t("whyTitlePart1")}{" "}
        <span className="text-[#D4AF37]">
          {t("whyTitleHighlight")}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        {t("whyDescription")}
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🦁</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("expertGuidesTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("expertGuidesDesc")}
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🚙</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("luxuryTravelTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("luxuryTravelDesc")}
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("ecoTourismTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("ecoTourismDesc")}
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("trustedServiceTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("trustedServiceDesc")}
        </p>

      </div>

    </div>

  </div>

</section>



{/* ===================== REVIEWSS ===================== */}
<section className="relative py-28 bg-gradient-to-b from-[#F8F6F1] via-white to-[#F2EEE5] overflow-hidden">

  {/* Background Effects */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[140px]" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex items-center bg-green-100 text-green-700 px-5 py-2 rounded-full uppercase tracking-[3px] text-xs font-bold">
        Google Reviews
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        Trusted By
        <span className="block text-[#C8A94C]">
          Happy Travelers
        </span>
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-8">
        We are committed to creating memorable travel experiences through
        professionally organized road trips, group adventures and safaris
        across Kenya.
      </p>

    </div>

    {/* Rating Card */}
    <div className="mt-16 flex justify-center">

      <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-10 max-w-5xl w-full grid md:grid-cols-[220px_1fr] gap-10 items-center">

        <div className="text-center">

          <h3 className="text-7xl font-black text-[#0B6E4F]">
            5.0
          </h3>

          <div className="mt-3 text-yellow-400 text-3xl">
            ★★★★★
          </div>

          <p className="mt-3 text-gray-500">
            Based on Google Reviews
          </p>

        </div>

        <div>

          <h3 className="text-3xl font-black text-gray-900">
            Savanna Crown Safaris Africa
          </h3>

          <p className="mt-5 text-gray-600 leading-8">
            Proudly serving travelers across Kenya with unforgettable group
            road trips, educational tours, camping adventures, hiking
            expeditions and customized safari experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

            <div className="bg-[#F8F8F8] rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-black text-[#0B6E4F]">5.0</h4>
              <p className="text-sm text-gray-500 mt-1">Google Rating</p>
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-black text-[#0B6E4F]">1+</h4>
              <p className="text-sm text-gray-500 mt-1">Verified Review</p>
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-black text-[#0B6E4F]">24/7</h4>
              <p className="text-sm text-gray-500 mt-1">Support</p>
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-black text-[#0B6E4F]">100%</h4>
              <p className="text-sm text-gray-500 mt-1">Commitment</p>
            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Review */}
    <div className="mt-20 max-w-5xl mx-auto">

      <div className="group relative bg-white rounded-[35px] shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        {/* Gold Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#0B6E4F] to-[#D4AF37]" />

        <div className="p-10">

          <div className="flex items-center justify-between flex-wrap gap-4">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-2xl font-black">
                K
              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Kennedy Kagunda
                </h3>

                <p className="text-gray-500">
                  Verified Google Review
                </p>

              </div>

            </div>

            <div className="text-yellow-400 text-3xl">
              ★★★★★
            </div>

          </div>

          <blockquote className="mt-8 text-xl leading-9 text-gray-700 italic">
            "Excellent service. Highly recommend Savanna Crown Safaris Africa."
          </blockquote>

        </div>

      </div>

    </div>

    {/* CTA */}
    <div className="mt-20 flex flex-wrap justify-center gap-6">

      <a
        href="https://www.google.com/search?q=SAVANNA+CROWN+SAFARIS+AFRICA&rlz=1C1PNFE_enKE1135KE1135&oq=SAVANNA+CROWN+SAFARIS+AFRICA&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDE1NjBqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x60c54a5d8117a2bb:0x1e10cf456f0a17fd,3,,,,"
        className="px-8 py-4 rounded-2xl bg-[#0B6E4F] text-white font-bold hover:bg-[#08523B] hover:-translate-y-1 transition duration-300 shadow-lg"
      >
        ⭐ Write a Google Review
      </a>

      <a
        href="https://www.google.com/maps/place/SAVANNA+CROWN+SAFARIS+AFRICA/@18.2533755,-29.1122719,3z/data=!4m6!3m5!1s0x60c54a5d8117a2bb:0x1e10cf456f0a17fd!8m2!3d18.2533755!4d-29.1122719!16s%2Fg%2F11z0wqw3_l?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
        className="px-8 py-4 rounded-2xl border-2 border-[#0B6E4F] text-[#0B6E4F] font-bold hover:bg-[#0B6E4F] hover:text-white hover:-translate-y-1 transition duration-300"
      >
        💬 View Google Profile
      </a>

    </div>

  </div>

</section>

{/* FOOTER */}
{/* ================= FOOTER ================= */}

{/* ================= FOOTER ================= */}
<footer className="relative overflow-hidden bg-[#050505] text-white">

  {/* Top Accent Line */}
  <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

  {/* Background Glow */}
  <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[170px]" />
  <div className="absolute -bottom-32 -right-20 w-[450px] h-[450px] bg-yellow-400/10 rounded-full blur-[170px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14">

      {/* ================= Company ================= */}

      <div>

        <h2 className="text-4xl font-black">
          Savanna
          <span className="text-[#D4AF37]"> Crown</span>
        </h2>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full mt-4"></div>

        <p className="mt-6 text-gray-400 leading-8">
          Discover Kenya and East Africa through unforgettable safaris,
          group adventures, road trips and tailor-made travel experiences.
          We create journeys filled with wildlife, culture, comfort and
          lifelong memories.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">

          {[
            {
              icon: <FaFacebookF />,
              link: "https://facebook.com",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com",
            },
            {
              icon: <FaWhatsapp />,
              link: "https://wa.me/254720524627",
            },
            {
              icon: <FaYoutube />,
              link: "https://youtube.com",
            },
          ].map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0B6E4F] hover:border-[#0B6E4F] hover:-translate-y-2 transition duration-500"
            >
              {item.icon}
            </a>

          ))}

        </div>

      </div>

      {/* ================= Quick Links ================= */}

      <div>

        <h3 className="text-2xl font-bold mb-8">
          Quick Links
        </h3>

        <div className="space-y-5">

          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Upcoming Trips", path: "/upcomingtrips" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300"
            >

              <FaArrowRight className="text-xs" />

              {item.name}

            </Link>

          ))}

        </div>

      </div>

      {/* ================= Contact ================= */}

      <div>

        <h3 className="text-2xl font-bold mb-8">
          Contact Us
        </h3>

        <div className="space-y-6">

          {/* Phone */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaPhoneAlt />
            </div>

            <div>

              <p className="font-semibold">
                Call Us
              </p>

              <a
                href="tel:+254720524627"
                className="text-gray-400 hover:text-white"
              >
                +254 720 524 627
              </a>

            </div>

          </div>

          {/* Email */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaEnvelope />
            </div>

            <div>

              <p className="font-semibold">
                Email
              </p>

              <a
                href="mailto:info@savannacrownsafarisafrica.co.ke"
                className="text-gray-400 hover:text-white break-all"
              >
                info@savannacrownsafarisafrica.co.ke
              </a>

            </div>

          </div>

          {/* Location */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>

              <p className="font-semibold">
                Office
              </p>

              <p className="text-gray-400">
                Nairobi, Kenya
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* ================= Bottom ================= */}

    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-gray-500 text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#D4AF37] font-semibold">
          Savanna Crown Safaris Africa
        </span>
        . All Rights Reserved.
      </p>

      <div className="flex items-center gap-6 text-sm">

        <Link
          to="/home"
          className="text-gray-500 hover:text-[#D4AF37] transition"
        >
          Privacy Policy
        </Link>

        <span className="text-white/20">|</span>

        <Link
          to="/home"
          className="text-gray-500 hover:text-[#D4AF37] transition"
        >
          Terms & Conditions
        </Link>

      </div>

    </div>

  </div>

  {/* Scroll To Top */}

  

</footer>
{selectedTrip && (
  <div className="fixed inset-0 z-[999] bg-black/80 p-3 flex items-center justify-center">

    <div
      className="
        relative
        w-full
        max-w-md
        md:max-w-4xl
        max-h-[95vh]
        overflow-y-auto
        bg-white
        rounded-3xl
        shadow-2xl
      "
    >
      <button
        onClick={() => setSelectedTrip(null)}
        className="
          absolute
          top-3
          right-3
          z-20
          w-10
          h-10
          rounded-full
          bg-white
          shadow-lg
          font-bold
        "
      >
        ✕
      </button>

      <div className="bg-black">
        <img
          src={selectedTrip.image}
          alt={selectedTrip.title}
          className="
            w-full
            h-[220px]
            sm:h-[280px]
            md:h-[450px]
            object-cover
          "
        />
      </div>

      <div className="p-5 md:p-8">

        <h2 className="text-2xl md:text-4xl font-black">
          {selectedTrip.title}
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
          {selectedTrip.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">

          <div>
            <p className="text-sm text-gray-500">
              Date
            </p>

            <p className="font-bold">
              {selectedTrip.date}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Duration
            </p>

            <p className="font-bold">
              {selectedTrip.duration}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Price
            </p>

            <p className="font-bold text-[#0B6E4F]">
              {selectedTrip.price}
            </p>
          </div>

        </div>

        <a
          href="https://wa.me/254720524627"
          target="_blank"
          rel="noreferrer"
          className="
            sticky
            bottom-0
            flex
            items-center
            justify-center
            gap-3
            w-full
            mt-6
            py-4
            rounded-full
            bg-[#0B6E4F]
            text-white
            font-bold
          "
        >
          <FaWhatsapp />

          Book on WhatsApp
        </a>

      </div>

    </div>

  </div>
)}
    </div>
    
  );
}

export default Home;
