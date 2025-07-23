import React from "react";

import { render } from "react-dom";
import { Link } from "react-router-dom";
const { useState, useEffect, useRef } = React;

export function CarStorage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimeouts = useRef({});
  const [popupVideoId, setPopupVideoId] = useState(null);

  const handleMouseEnter = (index) => {
    hoverTimeouts.current[index] = setTimeout(() => {
      setActiveIndex(index);
    }, 10);
  };

  const handleMouseLeave = (index) => {
    clearTimeout(hoverTimeouts.current[index]);
    setActiveIndex(0);
  };

  const openPopup = (videoId) => {
    setPopupVideoId(videoId);
  };

  const closePopup = () => {
    setPopupVideoId(null);
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
                    fontSize: "13px",
                    clear: "both",
                    position: "relative",
                    content: "normal",
                    display: "block",
                    lineHeight: "21px",
                    width: "940px",
                    border: "0px none rgb(119, 119, 119)",
                    padding: "30px 0px 30px 0px",
                    margin: "0px 30px 0px 30px",
                    display: "flex",
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
                      diplay: "flex",
                      justifyContent: "center",
                    }}
                  ></span>

                  <div
                    id="page-title"
                    style={{
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
                  ></div>

                  <div
                    id="page-text"
                    style={{
                      fontSize: "13px",
                      float: "left",
                      width: "940px",
                      border: "0px none rgb(119, 119, 119)",
                      padding: "0px",
                      margin: "0px",
                    }}
                  >
                    <h1>Store Your Car, R.V. & Boat</h1>
                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      <div
                        style={{
                          width: "276",
                          height: "299",
                        }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        onClick={() => openPopup("NlKUrVs8yJc")}
                      >
                        {activeIndex == 0 ? (
                          <img
                            fetchpriority="high"
                            decoding="async"
                            src="https://i2.wp.com/langleyministorage.com/wp-content/uploads/2013/06/boat.png?resize=276%2C299&ssl=1"
                            alt="Store boat, car, RV"
                            width="300"
                            height="299"
                            style={{
                              height: "299px",
                              outlineColor: "rgb(119, 119, 119)",
                              float: "left",
                              border: "0px none rgb(119, 119, 119)",
                              margin: "4px 24px 12px 0px",
                            }}
                          ></img>
                        ) : (
                          <iframe
                            width="300"
                            height="225"
                            src={`https://www.youtube.com/embed/NlKUrVs8yJc?autoplay=1&mute=1&controls=0&loop=1&playlist=NlKUrVs8yJc`}
                            title={"Car-Boat storage"}
                            style={{
                              height: "299px",
                              outlineColor: "rgb(119, 119, 119)",
                              float: "left",
                              border: "0px none rgb(119, 119, 119)",
                              margin: "4px 24px 12px 0px",
                            }}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        )}
                      </div>
                      Self-storage for your car, recreational vehicle (RV
                      storage), and boat is a cost-effective and secure option
                      if you don’t have enough room to keep your vehicle at your
                      home, for seasonal purposes, protection against damages or
                      theft, etc.
                    </p>
                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      Langley Mini Storage offers various options for your car
                      storage, RV storage and boat storage needs. We have
                      specially built indoor vehicle storage units to provide
                      extra protection against winter or summer weather and
                      rust. We also have open vehicle storage units with an
                      option for you to cover your vehicles and/or boats from
                      the elements. So, if you have question like “Where to find
                      indoor car storage, RV storage or boat storage near me?”,
                      Langley Mini Storage is the best solution you can have.
                      Some areas that we cover with our services are{" "}
                      <a
                        href="https://langleyministorage.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          outlineColor: "rgb(7, 0, 42)",
                          fontSize: "13px",
                          color: "rgb(7, 0, 42)",
                          border: "0px none rgb(7, 0, 42)",
                          padding: "0px",
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
                      Cloverdale and other nearby. We are also one of the best
                      providers of{" "}
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
                          }}
                        >
                          <em style={{}}>
                            <strong style={{}}>
                              Moving & Packaging Boxes & supplies.
                            </strong>
                          </em>
                        </a>
                      </span>
                    </p>
                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      There are times when you need a safe and secure place to
                      store your trailer, car, RV, and boat in winters, summers
                      or any other season. Choosing Langley Mini Storage is a
                      secure and cost-efficient option for vehicles like car,
                      RV, and boat storage as well as other types of{" "}
                      <a
                        href="https://langleyministorage.com/unit-storage-and-size/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          outlineColor: "rgb(7, 0, 42)",
                          fontSize: "13px",
                          color: "rgb(7, 0, 42)",
                          border: "0px none rgb(7, 0, 42)",
                          padding: "0px",
                        }}
                      >
                        <span
                          style={{
                            outlineColor: "rgb(7, 0, 42)",
                            fontSize: "13px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            textDecorationLine: "underline",
                            textDecorationThickness: "auto",
                            textDecorationStyle: "solid",
                            textDecorationColor: "rgb(7, 0, 42)",
                            border: "0px none rgb(7, 0, 42)",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <em style={{}}>
                            <strong style={{}}>storage units</strong>
                          </em>
                        </span>
                      </a>
                      need.
                    </p>
                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      Please give us a call at 604-534-0110 and we will be glad
                      to give you a quote on vehicle storage needs.
                      <br style={{}}></br>
                    </p>
                    <div
                      style={{
                        fontSize: "13px",
                        clear: "both",
                        float: "left",
                        width: "940px",
                        borderTop: "0px none rgb(204, 204, 204)",
                        borderLeft: "0px none rgb(204, 204, 204)",
                        borderRight: "0px none rgb(204, 204, 204)",
                        borderBottom: "1px dashed rgb(204, 204, 204)",
                        padding: "0px",
                        margin: "20px 0px 20px 0px",
                      }}
                    >
                      <h2
                        style={{
                          outlineColor: "rgb(119, 119, 119)",
                          outlineStyle: "none",
                          outlineWidth: "0px",
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontFamily: "Oswald, sans-serif",
                          lineHeight: "30.8px",
                          display: "inline-block",
                          borderTop: "0px none rgb(7, 2, 50)",
                          borderLeft: "0px none rgb(7, 2, 50)",
                          borderRight: "0px none rgb(7, 2, 50)",
                          borderBottom: "3px solid rgb(7, 2, 50)",
                          padding: "0px 0px 15px 0px",
                          margin: "0px 0px -1px 0px",
                        }}
                      >
                        Tips for safe vehicle storage
                      </h2>
                    </div>
                    <br style={{}}></br>
                    For a car, inactivity can be as deteriorating as it is for
                    human beings. Damage of nearly every kind can occur from
                    just sitting. Rubber can rot, upholstery can mildew, metal
                    can rust, precision-fit internal engine parts can seize,
                    wiring can short circuit, paint can blister, fiberglass can
                    crack, chrome can pit, brakes can lock up, and batteries can
                    go dead.
                    <p style={{ margin: "0px 0px 21px 0px" }}></p>
                    <p style={{ margin: "0px 0px 21px 0px" }}>
                      Many car owners patiently wait for spring in the
                      anticipation of touring the countryside again, only to be
                      dismayed by the car’s deteriorated condition over what
                      seemed to be such a short period of time. Here’s how to
                      prevent this from happening to you.
                    </p>
                    <ul style={{}}>
                      <li style={{}}>
                        Give your classic a good detailing. Wash all road grime
                        and salts from the undercarriage as well as body parts.
                        Give the entire car a good wax and don’t buff off
                        chromed surfaces until you’re ready to remove the car
                        from storage. Lubricate all rubber and vacuum and clean
                        the upholstery; you don’t want any hidden food crumbs
                        that might entice critters.
                      </li>

                      <li style={{}}>
                        Once you have your classic parked for the winter, change
                        or drain fluids. Try to drain the fluids while the car
                        is still warm. Oil, in particular, when it is heated and
                        circulating, picks up and emulsifies chemical
                        contaminants and particles. Just be careful and wear
                        gloves; hot engine oil can cause painful burns.
                      </li>

                      <li style={{}}>
                        Carefully fill the universal joints with fresh grease,
                        if your car has lube fittings. Pack the front wheel
                        bearings and apply clean grease on all of the steering
                        and suspension fittings.
                      </li>

                      <li style={{}}>
                        Bleed the brake system. The best insurance against break
                        deterioration is to drain your system of old fluid and
                        refill with fresh.
                      </li>

                      <li style={{}}>
                        Drain the fuel tank if you are going to store your car
                        for more than six months. Once you have drained the
                        tank, start the engine and run the rest of the gas out
                        of the lines. Old gas will clog carburetors and cause
                        valves to hang up. If you are only going to be storing
                        your car for a few months you can add a can of gasoline
                        stabilizer to delay fuel deterioration.
                      </li>

                      <li style={{}}>
                        Drain the cooling system completely and leave the
                        petcock open and the radiator cap off so air can
                        circulate. Disconnect the heater hoses and drain the
                        heater too. With all of the car’s fluids drained at this
                        point you should contact your local household and
                        hazardous waste service for proper disposal.
                      </li>

                      <li style={{}}>
                        Remove the battery and store it carefully if you want it
                        to survive. Wash it down with a solution of water and
                        baking soda, then top it off with distilled water. Store
                        it on a shelf in a dry place, not on concrete.
                      </li>

                      <li style={{}}>
                        Raise the car and place jack stands under the suspension
                        points. Remove the tires and stack them in a corner
                        placing cardboard between each one and cover.
                      </li>

                      <li style={{}}>
                        Depress the clutch and lock it in position with a 2 x 4
                        pressed against the clutch and the front of the seat
                        cushion or seat frame. Clutch plates often stick
                        together in storage.
                      </li>

                      <li style={{}}>
                        Before you encase your classic in its winter cocoon, the
                        last things to do are
                        <ul style={{}}>
                          <li style={{}}>
                            Roll down your windows to allow for circulation
                          </li>

                          <li style={{}}>
                            Place opened boxes of baking soda in various places
                            to absorb moisture
                          </li>

                          <li style={{}}>
                            Put a plastic bag over the carburetor to keep
                            moisture out
                          </li>

                          <li style={{}}>
                            stuff an old rag up the tailpipe to keep vermin out
                          </li>
                        </ul>
                      </li>

                      <li style={{}}>
                        Now you{" "}
                        <a
                          href="https://viknasvit.com.ua"
                          style={{
                            outlineColor: "rgb(7, 0, 42)",
                            fontSize: "13px",
                            color: "rgb(7, 0, 42)",
                            border: "0px none rgb(7, 0, 42)",
                            padding: "0px",
                          }}
                        >
                          viknasvit
                        </a>
                        can cover up your classic car. The most important
                        consideration when choosing a cover for your car’s
                        winter nap is selecting the right kind of fabric for
                        your specific storage application. Cotton flannel
                        fabrics breathe and allow air to circulate through them
                        as well as being soft and easy on your cars paint and
                        wax. Cotton/polyester fabrics have poor fluid resistance
                        and trap heat and moisture. Plastic films should be
                        avoided because they don’t breathe.
                      </li>
                    </ul>
                    <p style={{ margin: "0px" }}></p>
                  </div>

                  <span
                    style={{
                      outlineColor: "rgb(119, 119, 119)",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      clear: "both",
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
