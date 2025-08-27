import React, { useState, useEffect } from "react";
import { database} from '../../firebaseConfig'
import {  ref, runTransaction, onValue } from "firebase/database";

import "./Visitors.css";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isWatered, setIsWatered] = useState(false);
  const [isGrown, setIsGrown] = useState(false);

  useEffect(() => {
    const visitorsRef = ref(database, "visitors/count");

    runTransaction(visitorsRef, (currentCount) => {
      return (currentCount || 0) + 1;
    })
      
      .catch((error) => {
        console.error("Error:", error);
      });

    const unsubscribe = onValue(visitorsRef, (snapshot) => {
      if (snapshot.exists()) {
        const count = snapshot.val();
        setVisitorCount(count);
      } else {
        setVisitorCount(0);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handlePotClick = () => {
    if (!isGrown) {
      setIsWatered(true);

      setTimeout(() => {
        setIsGrown(true);
        setIsWatered(false);
      }, 2000);
    }
  };

  return (
    <>
      <section id="visitors" data-aos="fade-up">
        <div>
          <h3>Visitors</h3>
          <p>This page has been visited {visitorCount} times</p>
        </div>

        <div className="tree-container">
          <div className="shadow"></div>
          <div className="pot" onClick={handlePotClick}></div>
          <div className={`water-jar ${isWatered ? "show-jar" : ""}`}></div>
          <div className={`water ${isWatered ? "start-watering" : ""}`}></div>

          <div
            className="flower"
            style={{
              display: isGrown ? "block" : "none",
              transform: `translateX(-50%) rotate(180deg)`,
            }}
          >
            <div className="stem"></div>
            <div className="leaf"></div>

            <div className="petal petal-1"></div>
            <div className="petal petal-2"></div>
            <div className="petal petal-3"></div>
            <div className="petal petal-4"></div>
            <div className="petal petal-5"></div>
            <div className="petal petal-6"></div>
            <div className="dot"></div>
          </div>
        </div>

        <p>Click on the plant pot to water the plant</p>
      </section>
    </>
  );
};

export default VisitorCounter;
