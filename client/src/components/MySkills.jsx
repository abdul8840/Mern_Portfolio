import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tabs, TabItem } from "flowbite-react";

const MySkills = () => {
  const [userSkills, setUserSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // Default tab

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(`/api/skill/getskills`);
        const data = await res.json();
        if (res.ok) {
          setUserSkills(data.skills);
          setFilteredSkills(data.skills); // Initially show all skills
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkills();
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    filterSkillsByCategory(tabId);
  };

  const filterSkillsByCategory = (category) => {
    if (category === "all") {
      setFilteredSkills(userSkills);
    } else {
      const filtered = userSkills.filter(
        (skill) => skill.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredSkills(filtered);
    }
  };

  return (
    <div className="mb-20">
      <div className="mb-6">
        <h2 className="text-center text-4xl font-bold">My Skills</h2>
        <p className="text-center text-lg font-semibold text-gray-500">
          My Technical Level
        </p>
      </div>

      <Tabs
        variant="pills"
        className="flex gap-4 text-bold justify-center"
        selectedIndex={activeTab}
        onSelect={handleTabChange}
      >
        <TabItem eventKey="all" title="All">
          <p className="text-sm text-gray-500 dark:text-gray-400">All Skills</p>
        </TabItem>
        <TabItem eventKey="frontend" title="Frontend">
          <p className="text-sm text-gray-500 dark:text-gray-400">Frontend</p>
        </TabItem>
        <TabItem eventKey="backend" title="Backend">
          <p className="text-sm text-gray-500 dark:text-gray-400">Backend</p>
        </TabItem>
        <TabItem eventKey="technology" title="Other Technology">
          <p className="text-sm text-gray-500 dark:text-gray-400">Other Technology</p>
        </TabItem>
        <TabItem eventKey="programming" title="Programming Language">
          <p className="text-sm text-gray-500 dark:text-gray-400">Programming Language</p>
        </TabItem>
      </Tabs>

      <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-5">
        {filteredSkills.map((skill) => (
          <div key={skill._id} className="w-36 h-36 mt-10">
            <CircularProgressbarWithChildren
              value={skill.percent}
              styles={{
                path: {
                  stroke: '#D044CA',
                  padding: "10px",
                },
              }}
            >
              <img
                style={{ width: 70, marginTop: -5 }}
                src={skill.image}
                alt={skill.technology}
              />
              <div style={{ fontSize: 20, marginTop: -5 }}>
                <strong className="text-sm">{skill.percent}%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h1 className="text-center mt-2 font-bold text-xl">
              {skill.technology}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
