import React, { useState, useRef } from "react";

import { render } from "react-dom";

import { Link } from "react-router-dom";

export function Storage() {
  const video5x6 = "NlKUrVs8yJc";
  const video10x15l = "3jH7tQvA-Pw";
  const video8x10 = "BbcmoQPECJI";
  const video10x15 = "ZTOZ-Xtm9NE";

  const videoCards = [
    {
      title: "5’X6’ (80 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/7X10.png?resize=215%2C281&ssl=1",
      videoId: "NlKUrVs8yJc",
    },
    {
      title: "8’X10’ (80 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/5x5.png?resize=215%2C281&ssl=1",
      videoId: "BbcmoQPECJI",
    },
    {
      title: "10’X15’ (150 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/10X10.png?fit=624%2C418&ssl=1",
      videoId: "3jH7tQvA-Pw",
    },
    {
      title: "15’X10’ (200 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/10X10.png?resize=215%2C281&ssl=1",
      videoId: "kQSRWkdFt58",
    },
    {
      title: "5’X10’ (50 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/10x20.png?resize=215%2C281&ssl=1",
      videoId: "BbcmoQPECJI",
    },
    {
      title: "10’X20’ (200 Sq. Ft.)",
      image:
        "https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/08/10x25.png?resize=215%2C281&ssl=1",
      videoId: "ZTOZ-Xtm9NE",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [popupVideoId, setPopupVideoId] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const hoverTimeouts = useRef({});

  const handleMouseEnter = (index) => {
    hoverTimeouts.current[index] = setTimeout(() => {
      setActiveIndex(index);
    }, 1);
  };

  const handleMouseLeave = (index) => {
    clearTimeout(hoverTimeouts.current[index]);
    setActiveIndex(null);
  };

  const openPopup = (videoId) => {
    setPopupVideoId(videoId);
  };

  const closePopup = () => {
    setPopupVideoId(null);
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    const cardWidth = 300 + 16; // Card width + gap
    const maxScroll = 0;
    const newPosition = Math.min(scrollPosition + cardWidth * 4, maxScroll);
    setScrollPosition(newPosition);
    container.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    const cardWidth = 300 + 16; // Card width + gap
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.max(scrollPosition - cardWidth * 4, -maxScroll);
    setScrollPosition(newPosition);
    container.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  return (
    <>
      <div
        id="body-wrapper"
        style={{
          outlineColor: "rgb(119, 119, 119)",

          fontSize: "13px",

          fontFamily: 'Arial, "Helvetica Neue", sans-serif',

          display: "block",

          content: "normal",

          lineHeight: "21px",

          border: "0px none rgb(119, 119, 119)",

          padding: "0px",

          margin: "0px",

          width: "100%",

          backgroundColor: "rgb(255, 255, 255)",

          color: "rgb(119, 119, 119)",
        }}
      >
        <span
          style={{
            outlineColor: "rgb(119, 119, 119)",

            fontSize: "13px",

            display: "table",

            content: '""',

            lineHeight: "0px",

            border: "0px none rgb(119, 119, 119)",

            padding: "0px",

            margin: "0px",
          }}
        ></span>

        <div
          id="top-wrapper"
          style={{
            outlineColor: "rgb(119, 119, 119)",

            fontSize: "13px",

            border: "0px none rgb(119, 119, 119)",

            padding: "0px",

            margin: "0px",
          }}
        >
          <div
            id="top-before"
            style={{
              outlineColor: "rgb(170, 170, 170)",

              fontSize: "11px",

              fontFamily: 'Tahoma, "Helvetica Neue", "sans serif"',

              fontStretch: "100%",

              lineHeight: "11px",

              color: "rgb(170, 170, 170)",

              backgroundColor: "rgba(0, 0, 0, 0.8)",

              border: "0px none rgb(170, 170, 170)",

              padding: "10px 0px 10px 0px",

              margin: "0px",
            }}
          >
            <div
              style={{
                outlineColor: "rgb(170, 170, 170)",

                fontSize: "11px",

                clear: "both",

                position: "relative",

                content: "normal",

                display: "block",

                lineHeight: "11px",

                width: "1000px",

                border: "0px none rgb(170, 170, 170)",

                padding: "0px",

                margin: "0px 175.5px 0px 175.5px",
              }}
            >
              <span
                style={{
                  outlineColor: "rgb(170, 170, 170)",

                  fontSize: "11px",

                  clear: "none",

                  position: "static",

                  content: '" "',

                  display: "table",

                  lineHeight: "0px",

                  width: "0px",

                  border: "0px none rgb(170, 170, 170)",

                  padding: "0px",

                  margin: "0px",
                }}
              ></span>

              <h5
                style={{
                  outlineColor: "rgb(255, 255, 255)",

                  outlineStyle: "none",

                  outlineWidth: "0px",

                  fontSize: "16px",

                  fontStyle: "normal",

                  fontWeight: "400",

                  fontFamily: "Oswald, sans-serif",

                  lineHeight: "17.6px",

                  textAlign: "right",

                  color: "rgb(255, 255, 255)",

                  border: "0px none rgb(255, 255, 255)",

                  padding: "0px",

                  margin: "7px 0px 10px 0px",
                }}
              >
                Call us: (604) 534.0110
              </h5>

              <span
                style={{
                  outlineColor: "rgb(170, 170, 170)",

                  fontSize: "11px",

                  clear: "both",

                  position: "static",

                  content: '" "',

                  display: "table",

                  lineHeight: "0px",

                  width: "0px",

                  border: "0px none rgb(170, 170, 170)",

                  padding: "0px",

                  margin: "0px",
                }}
              ></span>
            </div>
          </div>
        </div>

        <div
          id="page-wrapper"
          style={{
            outlineColor: "rgb(119, 119, 119)",

            fontSize: "13px",

            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px",

            width: "1000px",

            border: "0px none rgb(119, 119, 119)",

            padding: "0px",

            margin: "0px auto",
          }}
        >
          <div
            id="content-wrapper"
            style={{
              outlineColor: "rgb(119, 119, 119)",

              fontSize: "13px",
              marginTop: "40px",

              float: "left",

              width: "1000px",

              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px -5px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 10px 0px inset",

              backgroundColor: "rgb(255, 255, 255)",

              border: "0px none rgb(119, 119, 119)",

              padding: "0px",
            }}
          >
            <div
              id="header"
              style={{
                outlineColor: "rgb(119, 119, 119)",

                fontSize: "13px",

                float: "left",

                width: "1000px",

                position: "relative",

                border: "0px none rgb(119, 119, 119)",

                padding: "0px",

                margin: "30px 0px 30px 0px",
              }}
            >
              <div
                style={{
                  outlineColor: "rgb(119, 119, 119)",

                  fontSize: "13px",

                  clear: "both",

                  position: "relative",

                  content: "normal",

                  display: "none",

                  lineHeight: "21px",

                  width: "940px",

                  border: "0px none rgb(119, 119, 119)",

                  padding: "0px",

                  margin: "0px auto 0px auto",
                }}
              >
                <span
                  style={{
                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    clear: "none",

                    position: "static",

                    content: '" "',

                    display: "table",

                    lineHeight: "0px",

                    width: "auto",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px",
                  }}
                ></span>

                <a
                  href="https://langleyministorage.com/"
                  style={{
                    outlineColor: "rgb(7, 0, 42)",

                    fontSize: "13px",

                    display: "inline-block",

                    position: "relative",

                    zIndex: "10",

                    maxWidth: "100%",

                    color: "rgb(7, 0, 42)",

                    border: "0px none rgb(7, 0, 42)",

                    padding: "0px",
                  }}
                >
                  <img
                    src="https://langleyministorage.com/wp-content/uploads/2013/06/2.swf"
                    alt=""
                    style={{
                      outlineColor: "rgb(7, 0, 42)",

                      height: "auto",

                      border: "0px none rgb(7, 0, 42)",

                      margin: "0px",
                    }}
                  ></img>
                </a>

                <div
                  style={{
                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    position: "absolute",

                    right: "0px",

                    top: "0px",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px",
                  }}
                ></div>

                <span
                  style={{
                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    clear: "both",

                    position: "static",

                    content: '" "',

                    display: "table",

                    lineHeight: "0px",

                    width: "auto",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px",
                  }}
                ></span>
              </div>

              <a
                href="https://langleyministorage.com/"
                style={{
                  display: "none",

                  outlineColor: "rgb(7, 0, 42)",

                  fontSize: "13px",

                  color: "rgb(7, 0, 42)",

                  border: "0px none rgb(7, 0, 42)",

                  padding: "0px",
                }}
              >
                <img
                  src="https://langleyministorage.com/wp-content/uploads/2020/04/videoplayback-4.gif"
                  alt="Langley Mini-Storage - Largest self-storage facilityLangley Mini-Storage"
                  style={{
                    textAlign: "center",

                    width: "53%",

                    outlineColor: "rgb(7, 0, 42)",

                    height: "auto",

                    border: "0px none rgb(7, 0, 42)",

                    margin: "0px 0px 0px 156px",
                  }}
                ></img>
              </a>

              <div
                style={{
                  outlineColor: "rgb(119, 119, 119)",

                  fontSize: "13px",

                  border: "0px none rgb(119, 119, 119)",

                  padding: "0px",

                  margin: "0px",
                }}
              >
                <div
                  id="accept_paypal_payment_form"
                  style={{
                    float: "right",

                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px 32px 0px 0px",
                  }}
                >
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    style={{
                      outlineColor: "rgb(119, 119, 119)",

                      outlineStyle: "none",

                      outlineWidth: "0px",

                      fontSize: "13px",

                      fontStyle: "normal",

                      fontWeight: "400",

                      border: "0px none rgb(119, 119, 119)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  >
                    <input
                      type="hidden"
                      name="cmd"
                      value="_xclick"
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="business"
                      value="info@langleyministorage.com"
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="item_name"
                      value=""
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="currency_code"
                      value="CAD"
                      style={{}}
                    ></input>

                    <div
                      style={{
                        outlineColor: "rgb(119, 119, 119)",

                        fontSize: "13px",

                        border: "0px none rgb(119, 119, 119)",

                        padding: "0px",

                        margin: "10px 0px 10px 0px",
                      }}
                    >
                      <span
                        style={{
                          outlineColor: "rgb(119, 119, 119)",

                          fontSize: "13px",

                          border: "0px none rgb(119, 119, 119)",

                          padding: "0px",

                          margin: "0px",
                        }}
                      >
                        <strong style={{}}></strong>
                      </span>
                    </div>

                    <select
                      id="amount"
                      name="amount"
                      style={{ display: "none" }}
                    >
                      <option value="" style={{}}></option>
                    </select>

                    <div
                      style={{
                        outlineColor: "rgb(119, 119, 119)",

                        fontSize: "13px",

                        border: "0px none rgb(119, 119, 119)",

                        padding: "0px",

                        margin: "10px 0px 10px 0px",
                      }}
                    >
                      <strong style={{}}>Your Email Address:</strong>
                    </div>

                    <input
                      type="hidden"
                      name="on0"
                      value="Reference"
                      style={{}}
                    ></input>

                    <div
                      style={{
                        outlineColor: "rgb(119, 119, 119)",

                        fontSize: "13px",

                        border: "0px none rgb(119, 119, 119)",

                        padding: "0px",

                        margin: "0px",
                      }}
                    >
                      <input
                        type="text"
                        name="os0"
                        maxlength="60"
                        value=""
                        style={{}}
                      ></input>
                    </div>

                    <input
                      type="hidden"
                      name="no_shipping"
                      value="0"
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="no_note"
                      value="1"
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="bn"
                      value="TipsandTricks_SP"
                      style={{}}
                    ></input>

                    <input
                      type="hidden"
                      name="return"
                      value="https://langleyministorage.com"
                      style={{}}
                    ></input>

                    <div
                      style={{
                        outlineColor: "rgb(119, 119, 119)",

                        fontSize: "13px",

                        border: "0px none rgb(119, 119, 119)",

                        padding: "0px",

                        margin: "10px 0px 10px 0px",
                      }}
                    >
                      <input
                        type="image"
                        src="https://www.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif"
                        name="submit"
                        alt="Make payments with payPal - it's fast, free and secure!"
                        style={{ cursor: "pointer" }}
                      ></input>
                    </div>
                  </form>
                </div>

                <div
                  style={{
                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px",
                  }}
                >
                  <div
                    id="proadv-logo"
                    style={{
                      backgroundColor: "rgb(7, 2, 50)",

                      height: "145px",

                      outlineColor: "rgb(119, 119, 119)",

                      fontSize: "13px",

                      border: "0px none rgb(119, 119, 119)",

                      padding: "0px",

                      margin: "-30px 0px 0px 0px",
                    }}
                  >
                    <object
                      classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                      width="600"
                      height="161"
                      id="movie_name"
                      align="middle"
                      style={{}}
                    >
                      <param
                        name="movie"
                        value="https://langleyministorage.com/wp-content/uploads/2013/06/2.swf"
                        style={{}}
                      ></param>

                      <object
                        type="application/x-shockwave-flash"
                        data="https://langleyministorage.com/wp-content/uploads/2013/06/2.swf"
                        width="600"
                        height="161"
                        style={{}}
                      >
                        <param
                          name="movie"
                          value="https://langleyministorage.com/wp-content/uploads/2013/06/2.swf"
                          style={{}}
                        ></param>

                        <a
                          id="flash-playrss"
                          href="http://www.adobe.com/go/getflash"
                          style={{
                            display: "inline-flex",

                            outlineColor: "rgb(7, 0, 42)",

                            fontSize: "13px",

                            color: "rgb(7, 0, 42)",

                            border: "0px none rgb(7, 0, 42)",

                            padding: "0px",
                          }}
                        >
                          <img
                            src="https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                            alt="Get Adobe Flash player"
                            style={{
                              display: "none",

                              height: "auto",

                              outlineColor: "rgb(7, 0, 42)",

                              border: "0px none rgb(7, 0, 42)",

                              margin: "18px 0px 0px 0px",
                            }}
                          ></img>
                        </a>

                        <a
                          id="logos-desktops"
                          href="https://langleyministorage.com/"
                          style={{
                            outlineColor: "rgb(7, 0, 42)",

                            fontSize: "13px",

                            color: "rgb(7, 0, 42)",

                            border: "0px none rgb(7, 0, 42)",

                            padding: "0px",
                          }}
                        >
                          <img
                            src="https://langleyministorage.com/wp-content/uploads/2020/04/videoplayback-4.gif"
                            alt="Langley Mini-Storage - Largest self-storage facilityLangley Mini-Storage"
                            style={{
                              textAlign: "center",

                              width: "530px",

                              outlineColor: "rgb(7, 0, 42)",

                              height: "132.5px",

                              border: "0px none rgb(7, 0, 42)",

                              margin: "0px 0px 0px 156px",
                            }}
                          ></img>
                        </a>
                      </object>
                    </object>
                  </div>
                </div>

                <div
                  id="navigation"
                  style={{
                    outlineColor: "rgb(119, 119, 119)",

                    fontSize: "13px",

                    clear: "both",

                    border: "0px none rgb(119, 119, 119)",

                    padding: "0px",

                    margin: "0px",
                  }}
                >
                  <div
                    style={{
                      outlineColor: "rgb(119, 119, 119)",

                      fontSize: "13px",

                      border: "0px none rgb(119, 119, 119)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  >
                    <div
                      id="menu"
                      style={{
                        backgroundColor: "rgb(7, 2, 50)",

                        outlineColor: "rgb(119, 119, 119)",

                        fontSize: "13px",

                        position: "relative",

                        zIndex: "99",

                        float: "left",

                        width: "1000px",

                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 0px 0px",

                        border: "0px none rgb(119, 119, 119)",

                        padding: "0px",

                        margin: "0px",
                      }}
                    >
                      <a
                        href="/"
                        style={{
                          outlineColor: "rgb(255, 255, 255)",

                          fontSize: "13px",

                          position: "absolute",

                          left: "0px",

                          width: "26px",

                          height: "48px",

                          color: "rgb(255, 255, 255)",

                          backgroundColor: "rgb(72, 51, 182)",

                          border: "0px none rgb(255, 255, 255)",

                          padding: "0px",
                        }}
                      >
                        <span
                          style={{
                            outlineColor: "rgb(255, 255, 255)",

                            fontSize: "11px",

                            position: "absolute",

                            top: "24px",

                            zIndex: "1",

                            width: "26px",

                            lineHeight: "0px",

                            textAlign: "center",

                            speak: "normal",

                            WebkitFontSmoothing: "auto",

                            content: "normal",

                            border: "0px none rgb(255, 255, 255)",

                            padding: "0px",

                            margin: "-6px 0px 0px 0px",
                          }}
                        >
                          <span
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "11px",

                              fontFamily: "AtlantisFonts",

                              position: "static",

                              top: "auto",

                              zIndex: "auto",

                              width: "auto",

                              lineHeight: "11px",

                              speak: "none",

                              WebkitFontSmoothing: "antialiased",

                              content: '""',

                              border: "0px none rgb(255, 255, 255)",

                              padding: "0px",

                              margin: "0px",
                            }}
                          >
                            
                          </span>
                        </span>
                      </a>

                      <ul
                        id="menu-top-menu"
                        style={{
                          listStylePosition: "outside",

                          listStyleImage: "none",

                          listStyleType: "none",

                          float: "left",

                          padding: "0px",

                          margin: "0px 0px 0px 26px",
                        }}
                      >
                        <li
                          id="menu-item-683"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <Link
                            to="/storage"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            {" "}
                            Storage Units
                          </Link>
                        </li>

                        <li
                          id="menu-item-684"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <Link
                            to="/car-storage"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            Car, R.V. & Boat Storage
                          </Link>
                        </li>

                        <li
                          id="menu-item-686"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <a
                            href="https://langleyministorage.com/packing-and-boxes/"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            Packing-Moving Boxes & Supplies
                          </a>
                        </li>

                        <li
                          id="menu-item-14"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <a
                            href="https://langleyministorage.com/tips/"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            TIPS
                          </a>
                        </li>

                        <li
                          id="menu-item-13"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <a
                            href="https://langleyministorage.com/faq/"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            FAQ
                          </a>
                        </li>

                        <li
                          id="menu-item-12"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <a
                            href="https://langleyministorage.com/insurance/"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            Storage Insurance
                          </a>
                        </li>

                        <li
                          id="menu-item-11"
                          style={{
                            listStylePosition: "outside",

                            listStyleImage: "none",

                            listStyleType: "none",

                            float: "left",

                            position: "relative",

                            padding: "0px",

                            margin: "0px",
                          }}
                        >
                          <a
                            href="https://langleyministorage.com/contact/"
                            style={{
                              outlineColor: "rgb(255, 255, 255)",

                              fontSize: "14px",

                              fontFamily:
                                'Oswald, Arial, "Helvetica Neue", sans-serif',

                              listStylePosition: "outside",

                              listStyleImage: "none",

                              listStyleType: "none",

                              display: "block",

                              position: "relative",

                              color: "rgb(255, 255, 255)",

                              fontStretch: "100%",

                              lineHeight: "14px",

                              border: "0px none rgb(255, 255, 255)",

                              padding: "17px 20px 17px 20px",
                            }}
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>

                      <div
                        id="responsive-menu"
                        style={{
                          outlineColor: "rgb(119, 119, 119)",

                          fontSize: "13px",

                          position: "relative",

                          display: "none",

                          width: "175px",

                          border: "0px none rgb(119, 119, 119)",

                          padding: "0px",

                          margin: "0px auto 0px auto",
                        }}
                      >
                        <div
                          style={{
                            outlineColor: "rgb(119, 119, 119)",

                            fontSize: "13px",

                            width: "150px",

                            float: "left",

                            border: "0px none rgb(119, 119, 119)",

                            padding: "15px 0px 15px 0px",

                            margin: "0px",
                          }}
                        >
                          <div
                            style={{
                              outlineColor: "rgb(119, 119, 119)",

                              fontSize: "13px",

                              border: "0px none rgb(119, 119, 119)",

                              padding: "0px",

                              margin: "0px",
                            }}
                          >
                            <select
                              id="menu-top-menu-1"
                              style={{
                                float: "left",

                                width: "100%",

                                backgroundColor: "rgb(255, 255, 255)",

                                fontSize: "12px",

                                fontFamily: 'Tahoma, "Helvetica Neue"',

                                lineHeight: "normal",

                                border: "0px none rgb(0, 0, 0)",

                                borderRadius: "2px",

                                padding: "3px 5px 3px 5px",
                              }}
                            >
                              <option value="" style={{}}>
                                Go to…
                              </option>

                              <option
                                value="https://langleyministorage.com/unit-storage-and-size/"
                                style={{}}
                              >
                                Storage Units
                              </option>

                              <option
                                value="https://langleyministorage.com/store-your-car-and-rv/"
                                style={{}}
                              >
                                Car, R.V. & Boat Storage
                              </option>

                              <option
                                value="https://langleyministorage.com/packing-and-boxes/"
                                style={{}}
                              >
                                Packing-Moving Boxes & Supplies
                              </option>

                              <option
                                value="https://langleyministorage.com/tips/"
                                style={{}}
                              >
                                TIPS
                              </option>

                              <option
                                value="https://langleyministorage.com/faq/"
                                style={{}}
                              >
                                FAQ
                              </option>

                              <option
                                value="https://langleyministorage.com/insurance/"
                                style={{}}
                              >
                                Storage Insurance
                              </option>

                              <option
                                value="https://langleyministorage.com/contact/"
                                style={{}}
                              >
                                Contact us
                              </option>

                              <option
                                value="https://langleyministorage.com/privacy-policy/"
                                style={{}}
                              >
                                Privacy Policy
                              </option>
                            </select>
                          </div>
                        </div>

                        <span
                          style={{
                            outlineColor: "rgb(119, 119, 119)",

                            fontSize: "20px",

                            display: "block",

                            float: "left",

                            opacity: "0.4",

                            speak: "normal",

                            lineHeight: "21px",

                            WebkitFontSmoothing: "auto",

                            content: "normal",

                            border: "0px none rgb(119, 119, 119)",

                            padding: "17px 0px 0px 0px",

                            margin: "0px 0px 0px 5px",
                          }}
                        >
                          <span
                            style={{
                              outlineColor: "rgb(119, 119, 119)",

                              fontSize: "20px",

                              fontFamily: "AtlantisFonts",

                              display: "inline",

                              float: "none",

                              speak: "none",

                              lineHeight: "20px",

                              WebkitFontSmoothing: "antialiased",

                              content: '""',

                              border: "0px none rgb(119, 119, 119)",

                              padding: "0px",

                              margin: "0px",
                            }}
                          >
                            
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="page-content"
                  style={{
                    outlineColor: "rgb(119, 119, 119)",
                    fontSize: "13px",
                    clear: "both",
                    position: "relative",
                    content: "normal",
                    display: "block",
                    lineHeight: "21px",
                    width: "940px",
                    border: "0px none rgb(119, 119, 119)",
                    padding: "30px 0px 30px 0px",
                    margin: "20px auto",
                    diplay: "flex",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      outlineColor: "rgb(119, 119, 119)",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      clear: "none",
                      position: "static",
                      content: '" "',
                      display: "table",
                      lineHeight: "0px",
                      width: "0px",
                      border: "0px none rgb(119, 119, 119)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  ></span>

                  <div
                    id="page-title"
                    style={{
                      outlineColor: "rgb(119, 119, 119)",
                      fontSize: "13px",
                      clear: "both",
                      float: "left",
                      width: "940px",
                      borderTop: "0px none rgb(221, 221, 221)",
                      borderLeft: "0px none rgb(221, 221, 221)",
                      borderRight: "0px none rgb(221, 221, 221)",
                      borderBottom: "1px dashed rgb(221, 221, 221)",
                      padding: "0px",
                      margin: "0px 0px 20px 0px",
                    }}
                  >
                    <h1
                      style={{
                        outlineColor: "rgb(119, 119, 119)",
                        outlineStyle: "none",
                        outlineWidth: "0px",
                        fontSize: "26px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontFamily: "Oswald, sans-serif",
                        lineHeight: "28.6px",
                        display: "inline-block",
                        color: "rgb(119, 119, 119)",
                        borderTop: "0px none rgb(7, 0, 42)",
                        borderLeft: "0px none rgb(7, 0, 42)",
                        borderRight: "0px none rgb(7, 0, 42)",
                        borderBottom: "3px solid rgb(7, 0, 42)",
                        padding: "0px 0px 15px 0px",
                        margin: "0px 0px -1px 0px",
                      }}
                    >
                      Units storage and size
                    </h1>
                    <div
                      style={{
                        outlineColor: "rgb(119, 119, 119)",
                        fontSize: "11px",
                        fontFamily: 'Tahoma, "Helvetica Neue"',
                        float: "right",
                        border: "0px none rgb(119, 119, 119)",
                        padding: "0px",
                        margin: "10px 0px 0px 0px",
                      }}
                    >
                      <a
                        title="Go to ."
                        href="https://langleyministorage.com"
                        style={{
                          outlineColor: "rgb(7, 0, 42)",
                          fontSize: "11px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          color: "rgb(7, 0, 42)",
                          border: "0px none rgb(7, 0, 42)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      ></a>
                      Units storage and size
                    </div>
                  </div>
                  <div
                    id="page-text"
                    style={{
                      outlineColor: "rgb(119, 119, 119)",
                      fontSize: "13px",
                      float: "left",
                      width: "940px",
                      border: "0px none rgb(119, 119, 119)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <h2 style={{}}>
                      How much storage units and space do you need?
                    </h2>

                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      From personal experience, we know what it’s like to have
                      to put personal or business possessions into storage.
                      That’s why we care about your storage units need. At
                      Langley Mini Storage, we have cheap storage units for sale
                      suited to commercial and/or domestic needs. We also offer
                      indoor or outdoor{" "}
                      <em style={{}}>
                        <span
                          style={{
                            outlineColor: "rgb(119, 119, 119)",
                            fontSize: "13px",
                            fontStyle: "italic",
                            fontWeight: "400",
                            textDecorationLine: "underline",
                            textDecorationThickness: "auto",
                            textDecorationStyle: "solid",
                            textDecorationColor: "rgb(119, 119, 119)",
                            border: "0px none rgb(119, 119, 119)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <strong style={{}}>
                            <a
                              href="https://langleyministorage.com/store-your-car-and-rv/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                outlineColor: "rgb(7, 0, 42)",
                                fontSize: "13px",
                                fontWeight: "700",
                                color: "rgb(7, 0, 42)",
                                border: "0px none rgb(7, 0, 42)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              boat, RV and car storage
                            </a>
                          </strong>
                        </span>
                      </em>
                      . We understand you may be storing business assets or a
                      lifetime’s possessions with us. Our goal is to help store
                      your valued possessions by providing personal and
                      professional storage unit service.
                    </p>

                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      Here is a sampling of the storage unit sizes that are the
                      most popular, we offer an array of other sizes that are
                      available for all your unit storage needs. As well, our
                      friendly staff can help you find the right size storage
                      unit for all your requirements. So, if you have a question
                      like “Where to find cheap storage units near me?”, Langley
                      Mini Storage is the best storage unit solution you can
                      have. Some areas that we cover with our services are{" "}
                      <a
                        href="https://langleyministorage.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          outlineColor: "rgb(7, 0, 42)",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          color: "rgb(7, 0, 42)",
                          border: "0px none rgb(7, 0, 42)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <em style={{}}>
                          <strong style={{}}>
                            <span
                              style={{
                                outlineColor: "rgb(7, 0, 42)",
                                fontSize: "13px",
                                fontStyle: "italic",
                                fontWeight: "700",
                                textDecorationLine: "underline",
                                textDecorationThickness: "auto",
                                textDecorationStyle: "solid",
                                textDecorationColor: "rgb(7, 0, 42)",
                                border: "0px none rgb(7, 0, 42)",
                                padding: "0px",
                                margin: "0px",
                              }}
                            >
                              storage Langley BC
                            </span>
                          </strong>
                        </em>
                      </a>
                      that includes Langley City, Langley Township. Some other
                      areas are Surrey, White Rock, Aldergrove, Abbotsford,
                      Cloverdale and other nearby.
                    </p>

                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      Please contact us at 
                      <strong style={{}}>(604) 534.0110 </strong>
                      for unit availability and pricing.
                    </p>

                    <p style={{ margin: "0px 0px 21px 0px" }}></p>

                    <div
                      style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <button
                          onClick={scrollLeft}
                          style={{
                            position: "absolute",
                            left: "0",
                            zIndex: 10,
                            backgroundColor: "#1f2937",
                            color: "#ffffff",
                            padding: "8px",
                            borderRadius: "50%",
                            border: "none",
                            cursor:
                              scrollPosition === 0 ? "not-allowed" : "pointer",
                            opacity: scrollPosition === 0 ? 0.5 : 1,
                          }}
                          disabled={scrollPosition === 0}
                        >
                          ←
                        </button>
                        <div
                          ref={scrollContainerRef}
                          className="no-scrollbar"
                          style={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            paddingBottom: "20px",
                            display: "flex",
                            gap: "16px",
                            scrollSnapType: "x mandatory",
                            scrollBehavior: "smooth",
                          }}
                        >
                          {videoCards.map((card, index) => (
                            <div
                              key={index}
                              style={{
                                position: "relative",
                                backgroundColor: "#000000",
                                color: "#ffffff",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                width: "300px",
                                height: "250px",
                                flex: "0 0 auto",
                                scrollSnapAlign: "center",
                              }}
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={() => handleMouseLeave(index)}
                              onClick={() => openPopup(card.videoId)}
                            >
                              {activeIndex === index ? (
                                <div
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "90%",
                                    zIndex: 2,
                                  }}
                                  onClick={() => openPopup(card.videoId)}
                                >
                                  <iframe
                                    width="300"
                                    height="225"
                                    src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${card.videoId}`}
                                    title={card.title}
                                    allow="autoplay; encrypted-media"
                                  />
                                </div>
                              ) : (
                                <div
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 2,
                                  }}
                                  onClick={() => openPopup(card.videoId)}
                                >
                                  <img
                                    src={`https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`}
                                    alt={card.title}
                                    style={{
                                      width: "100%",
                                      height: "90%",
                                      objectFit: "none",
                                    }}
                                  />
                                </div>
                              )}
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "-3px",
                                  left: "0",
                                  width: "100%",
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                  fontSize: "18px",
                                  textAlign: "center",
                                  padding: "4px",
                                }}
                              >
                                {card.title}
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={scrollRight}
                          style={{
                            position: "absolute",
                            right: "0",
                            zIndex: 10,
                            backgroundColor: "#1f2937",
                            color: "#ffffff",
                            padding: "8px",
                            borderRadius: "50%",
                            border: "none",
                            cursor:
                              scrollPosition <=
                              -(
                                scrollContainerRef.current?.scrollWidth -
                                scrollContainerRef.current?.clientWidth
                              )
                                ? "not-allowed"
                                : "pointer",
                            opacity:
                              scrollPosition <=
                              -(
                                scrollContainerRef.current?.scrollWidth -
                                scrollContainerRef.current?.clientWidth
                              )
                                ? 0.5
                                : 1,
                          }}
                          disabled={
                            scrollPosition <=
                            -(
                              scrollContainerRef.current?.scrollWidth -
                              scrollContainerRef.current?.clientWidth
                            )
                          }
                        >
                          →
                        </button>
                      </div>

                      {popupVideoId && (
                        <div
                          style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 50,
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              backgroundColor: "#ffffff",
                              borderRadius: "8px",
                              padding: "0px",
                              maxWidth: "800px",
                              width: "100%",
                            }}
                          >
                            <button
                              onClick={closePopup}
                              style={{
                                position: "absolute",
                                top: "8px",
                                right: "8px",
                                background: "none",
                                border: "none",
                                fontSize: "20px",
                                color: "#000000",
                                cursor: "pointer",
                              }}
                            >
                              ×
                            </button>
                            <iframe
                              width="100%"
                              height="400"
                              src={`https://www.youtube.com/embed/${popupVideoId}?autoplay=1`}
                              title="Video Popup"
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <p style={{ margin: "0px 0px 21px 0px" }}></p>

                  <h2 style={{ textAlign: "left" }}>
                    All these sizes available for your unit storage needs:
                  </h2>

                  <p style={{ margin: "0px 0px 21px 0px", textAlign: "left" }}>
                    <strong style={{}}>4 x 4 x 4</strong>– Boxes, small amount
                    of office records, golf clubs, seasonal items.
                    <br style={{}}></br>
                    <strong style={{}}>5 x 6 x 6</strong>– End tables, boxes,
                    office files, workman’s tools, personal records,
                    miscellaneous small items.
                    <br style={{}}></br>
                    <strong style={{}}>5 x 6 x 8</strong>– Motorcycle, single
                    mattress and box spring, a couch<br style={{}}></br>
                    <strong style={{}}>4 x 10 x 6</strong>– Boxes, Golf clubs,{" "}
                    <span
                      style={{
                        outlineColor: "rgb(119, 119, 119)",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        textDecorationLine: "underline",
                        textDecorationThickness: "auto",
                        textDecorationStyle: "solid",
                        textDecorationColor: "rgb(119, 119, 119)",
                        border: "0px none rgb(119, 119, 119)",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="https://langleyministorage.com/packing-and-boxes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          outlineColor: "rgb(7, 0, 42)",
                          fontSize: "13px",
                          color: "rgb(7, 0, 42)",
                          border: "0px none rgb(7, 0, 42)",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        <em style={{}}>
                          <strong style={{}}>Moving & Packing Boxes</strong>
                        </em>
                      </a>
                    </span>
                    and Misc items.<br style={{}}></br>
                    <strong style={{}}>5 x 10 x 8</strong>– Beds, couch, chairs,
                    chest of drawers, small items and boxes, outdoor furniture.
                    <br style={{}}></br>
                    <strong style={{}}>6 x 10 x 8</strong>– King & Queen Beds,
                    some furniture, lawn mowers, garden tools, bicycles and/or
                    motorcycle etc..<br style={{}}></br>
                    <strong style={{}}>8 x 10 x 8</strong>– Furniture from a
                    bachelor or small one bedroom apartment.<br style={{}}></br>
                    <strong style={{}}>10 x 10 x 10</strong>– Furniture from one
                    bedroom apartment without appliances, workman tools, shop
                    items, equipment.
                    <br style={{}}></br>
                    <strong style={{}}>10 x 11 x 10</strong>– Furniture from one
                    bedroom apartment with small appliances, workman tools, shop
                    items,equipment.<br style={{}}></br>
                    <strong style={{}}>10 x 12 x 10</strong>– The same items as
                    above, with additional boxes, misc home items.
                    <br style={{}}></br>
                    <strong style={{}}>10 x 14 x 10</strong>– 3 to 4 rooms of
                    furniture, misc items and boxes.<br style={{}}></br>
                    <strong style={{}}>10 x 15 x 10</strong>– 4 to 5 rooms of
                    furniture, or small car, misc boxes and items.
                    <br style={{}}></br>
                    <strong style={{}}>10 x 20 x 10</strong>– Approximate 6
                    rooms of furniture, as well as commercial use, warehousing.
                    <br style={{}}></br>
                    <strong style={{}}>10 x 30 x 10</strong>– Approximate 9
                    rooms, or commercial use, warehousing.<br style={{}}></br>
                    <strong style={{}}>10 x 34 x 10</strong>– Approximate 10
                    rooms, commercial use, business use, car and/or boat.
                    <br style={{}}></br>
                    <strong style={{}}>15 x 34 x 10</strong>– More rooms and
                    basement, with cars or boats, appliances, boxes.
                    <br style={{}}></br>
                    <strong style={{}}>20 x 34 x 10</strong>– The ultimate !!
                    Furniture from a five bedroom house and basement, with room
                    left over for an automobile and/or boat.
                  </p>

                  <p style={{ margin: "0px 0px 21px 0px" }}>
                    <strong style={{}}>RV PARKING</strong>– Room for R.V’s up to
                    40 feets.<br style={{}}></br>
                    <strong style={{}}>AUTO PARKING</strong>–
                    <a
                      href="https://maine-coon.org.ua"
                      style={{
                        outlineColor: "rgb(7, 0, 42)",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        color: "rgb(7, 0, 42)",
                        border: "0px none rgb(7, 0, 42)",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      maine-coon
                    </a>
                    Just as it sounds…lots of room for Cars, Boats, Trucks,
                    inside or outside fully secured with fenced gated compound
                    with alarm and Closed Circuit T.V.
                  </p>

                  <p style={{ margin: "0px" }}></p>
                </div>
              </div>

              <div
                id="footer"
                style={{
                  backgroundColor: "rgb(7, 2, 50)",

                  outlineColor: "rgb(153, 153, 153)",

                  fontSize: "11px",

                  fontFamily: 'Tahoma, Arial, "Helvetica Neue", sans-serif',

                  clear: "both",

                  fontStretch: "100%",

                  lineHeight: "21px",

                  color: "rgb(153, 153, 153)",

                  boxShadow: "rgba(0, 0, 0, 0.2) 0px -5px 0px 0px inset",

                  border: "0px none rgb(153, 153, 153)",

                  padding: "40px 0px 0px 0px",

                  margin: "0px",
                }}
              >
                <div
                  style={{
                    outlineColor: "rgb(153, 153, 153)",

                    fontSize: "11px",

                    clear: "both",

                    position: "relative",

                    content: "normal",

                    display: "block",

                    lineHeight: "21px",

                    width: "940px",

                    border: "0px none rgb(153, 153, 153)",

                    padding: "0px",

                    margin: "0px 30px 0px 30px",
                  }}
                >
                  <span
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      clear: "none",

                      position: "static",

                      content: '" "',

                      display: "table",

                      lineHeight: "0px",

                      width: "0px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  ></span>

                  <div
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      float: "left",

                      position: "relative",

                      minHeight: "1px",

                      height: "167px",

                      width: "206.797px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px 37.5938px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        outlineColor: "rgb(153, 153, 153)",

                        fontSize: "11px",

                        float: "left",

                        width: "206.797px",

                        border: "0px none rgb(153, 153, 153)",

                        padding: "0px",

                        margin: "0px 0px 40px 0px",
                      }}
                    >
                      <ul id="menu-topmenu-1" style={{}}>
                        <li style={{}}>
                          <a
                            href="https://langleyministorage.com/"
                            style={{
                              outlineColor: "rgb(85, 85, 85)",

                              fontSize: "11px",

                              color: "rgb(85, 85, 85)",

                              border: "0px none rgb(85, 85, 85)",

                              padding: "0px",
                            }}
                          >
                            HOME
                          </a>
                        </li>

                        <li style={{}}>
                          <a
                            href="https://langleyministorage.com/tips/"
                            style={{
                              outlineColor: "rgb(85, 85, 85)",

                              fontSize: "11px",

                              color: "rgb(85, 85, 85)",

                              border: "0px none rgb(85, 85, 85)",

                              padding: "0px",
                            }}
                          >
                            TIPS
                          </a>
                        </li>

                        <li style={{}}>
                          <a
                            href="https://langleyministorage.com/faq/"
                            style={{
                              outlineColor: "rgb(85, 85, 85)",

                              fontSize: "11px",

                              color: "rgb(85, 85, 85)",

                              border: "0px none rgb(85, 85, 85)",

                              padding: "0px",
                            }}
                          >
                            FAQ
                          </a>
                        </li>

                        <li style={{}}>
                          <a
                            href="https://langleyministorage.com/contact/"
                            style={{
                              outlineColor: "rgb(85, 85, 85)",

                              fontSize: "11px",

                              color: "rgb(85, 85, 85)",

                              border: "0px none rgb(85, 85, 85)",

                              padding: "0px",
                            }}
                          >
                            Contact us
                          </a>
                        </li>

                        <li style={{}}>
                          <a
                            href="https://langleyministorage.com/privacy-policy/"
                            style={{
                              outlineColor: "rgb(85, 85, 85)",

                              fontSize: "11px",

                              color: "rgb(85, 85, 85)",

                              border: "0px none rgb(85, 85, 85)",

                              padding: "0px",
                            }}
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      float: "left",

                      position: "relative",

                      minHeight: "1px",

                      height: "1px",

                      width: "206.797px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px 37.5938px 0px 0px",
                    }}
                  ></div>

                  <div
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      float: "left",

                      position: "relative",

                      minHeight: "1px",

                      height: "1px",

                      width: "206.797px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px 37.5938px 0px 0px",
                    }}
                  ></div>

                  <div
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      float: "right",

                      position: "relative",

                      minHeight: "1px",

                      height: "1px",

                      width: "206.797px",

                      clear: "right",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  >
                    <span
                      style={{
                        outlineColor: "rgb(153, 153, 153)",

                        fontSize: "11px",

                        float: "none",

                        position: "static",

                        minHeight: "0px",

                        height: "0px",

                        width: "0px",

                        clear: "both",

                        border: "0px none rgb(153, 153, 153)",

                        padding: "0px",

                        margin: "0px",
                      }}
                    ></span>
                  </div>

                  <span
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      clear: "both",

                      position: "static",

                      content: '" "',

                      display: "table",

                      lineHeight: "0px",

                      width: "0px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  ></span>
                </div>
              </div>

              <div
                id="copyright"
                style={{
                  outlineColor: "rgb(153, 153, 153)",

                  fontSize: "11px",

                  fontFamily: 'Tahoma, "Helvetica Neue", sans-serif',

                  clear: "both",

                  color: "rgb(153, 153, 153)",

                  backgroundColor: "rgba(7, 0, 43, 0.9)",

                  border: "0px none rgb(153, 153, 153)",

                  padding: "10px 0px 10px 0px",

                  margin: "0px",
                }}
              >
                <div
                  style={{
                    outlineColor: "rgb(153, 153, 153)",

                    fontSize: "11px",

                    clear: "both",

                    position: "relative",

                    content: "normal",

                    display: "block",

                    lineHeight: "21px",

                    width: "940px",

                    border: "0px none rgb(153, 153, 153)",

                    padding: "0px",

                    margin: "0px 30px 0px 30px",
                  }}
                >
                  <span
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      clear: "none",

                      position: "static",

                      content: '" "',

                      display: "table",

                      lineHeight: "0px",

                      width: "0px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  ></span>
                  Langley Mini Storage © All Rights Reserved. 2020{" "}
                  <span
                    style={{
                      outlineColor: "rgb(153, 153, 153)",

                      fontSize: "11px",

                      clear: "both",

                      position: "static",

                      content: '" "',

                      display: "table",

                      lineHeight: "0px",

                      width: "0px",

                      border: "0px none rgb(153, 153, 153)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  ></span>
                </div>
              </div>
            </div>

            <div
              id="goTop"
              style={{
                outlineColor: "rgb(119, 119, 119)",

                fontSize: "13px",

                display: "none",

                position: "fixed",

                right: "25px",

                bottom: "25px",

                zIndex: "20",

                border: "0px none rgb(119, 119, 119)",

                padding: "0px",

                margin: "0px",
              }}
            >
              <a
                href="#"
                style={{
                  outlineColor: "rgb(255, 255, 255)",

                  fontSize: "13px",

                  display: "block",

                  color: "rgb(255, 255, 255)",

                  lineHeight: "0px",

                  opacity: "0.5",

                  backgroundColor: "rgb(40, 45, 46)",

                  border: "0px none rgb(255, 255, 255)",

                  padding: "10px",
                }}
              >
                <span
                  style={{
                    outlineColor: "rgb(255, 255, 255)",

                    fontSize: "13px",

                    speak: "normal",

                    lineHeight: "0px",

                    WebkitFontSmoothing: "auto",

                    content: "normal",

                    border: "0px none rgb(255, 255, 255)",

                    padding: "0px",

                    margin: "0px",
                  }}
                >
                  <span
                    style={{
                      outlineColor: "rgb(255, 255, 255)",

                      fontSize: "13px",

                      fontFamily: "AtlantisFonts",

                      speak: "none",

                      lineHeight: "13px",

                      WebkitFontSmoothing: "antialiased",

                      content: '""',

                      border: "0px none rgb(255, 255, 255)",

                      padding: "0px",

                      margin: "0px",
                    }}
                  >
                    
                  </span>
                </span>
              </a>
            </div>

            <div
              style={{
                outlineColor: "rgb(119, 119, 119)",

                fontSize: "13px",

                clear: "both",

                border: "0px none rgb(119, 119, 119)",

                padding: "0px",

                margin: "0px",
              }}
            ></div>
          </div>
        </div>

        <span
          style={{
            outlineColor: "rgb(119, 119, 119)",

            fontSize: "13px",

            display: "table",

            content: '""',

            lineHeight: "0px",

            border: "0px none rgb(119, 119, 119)",

            padding: "0px",

            margin: "0px",
          }}
        ></span>
      </div>
    </>
  );
}
