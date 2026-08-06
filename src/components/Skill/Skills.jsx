import React from 'react'
import '../../App.css'
import './Skills.css'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import skillsData from '../../Data/SkillsData'



const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    console.log(selectedSkill)
    return (
        <section id="skills">
            <div className="container">
                <div className="skills_container">
                    <div className="skills_header">
                        <h1>My Skills</h1>
                        <p>Technologies and tools I use to build modern web applications.</p>
                    </div>
                    <div className="skills_content">

                        <div className="frontend_section">
                            <h3>Frontend Skills</h3>
                            <div className="skills_list">
                                {skillsData.filter(skill => skill.category === 'frontend')
                                    .map(skill => (
                                        <Card
                                            key={skill.id}
                                            image={skill.image}
                                            title={skill.title}
                                            onClick={() => {
                                                console.log("Clicked")
                                                setSelectedSkill(skill)
                                            }}
                                        />
                                    ))
                                }



                            </div>

                        </div>
                        <div className="backend_section">
                            <h3> Backend Skills</h3>
                            <div className="skills_list">
                                {skillsData.filter(skill => skill.category === 'backend')
                                    .map(skill => (
                                        <Card
                                            key={skill.id}
                                            image={skill.image}
                                            title={skill.title}
                                            onClick={() => {
                                                console.log("Clicked")
                                                setSelectedSkill(skill)
                                            }}

                                        />
                                    ))
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={selectedSkill !== null}
                    setIsOpen={() => setSelectedSkill(null)}
                    image={selectedSkill?.image}
                    title={selectedSkill?.title}
                    level={selectedSkill?.level}
                    description={selectedSkill?.description}
                />
            </div>

        </section>

    )
}

export default Skills