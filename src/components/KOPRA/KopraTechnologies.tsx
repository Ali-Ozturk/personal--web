import React from 'react';
import styled from "styled-components";

// ['Java', 'Spring Boot', 'MSSQL', 'React'],

type TechObject = {
    title: string;
    description: string;
}

const technologies: TechObject[] = [
    {title: 'Spring boot (Java)', description: 'Vi har valgt at bruge denne fordi vi har haft ..'},
    {
        title: 'Microsoft SQL Server',
        description: 'Vi vidste vi havde brug for en high-performance server for at kunne ..'
    },
    {title: 'React', description: 'Vi valgte dette frontend framework da vi havde..'},
]

const KopraTechnologies = () => {
    const [selectedTech, setSelectedTech] = React.useState<TechObject>(technologies[0]);

    return (
        <div className={'row w-50 m-auto'}>
            <div className={'col-6 text-center'}>
                {technologies.map((tech, key) => {
                    return <TechButton
                        className={'pointer rounded-pill my-3 p-2 m-auto' + (selectedTech === tech ? ' li-active-tech' : '')}
                        onClick={() => setSelectedTech(tech)}>{tech.title}</TechButton>
                })}
            </div>

            <div className={'col-6'}>
                <p>{selectedTech.description}</p>
            </div>
        </div>
    );
};

const TechButton = styled.div`
  --hover: #ACFAFE;
  --color: #C4E0F6;
  border: 2px solid;
  color: var(--color);

  width: 15rem;

  transition: 0.25s;

  &:hover,
  &:focus,
  &.li-active-tech {
    box-shadow: inset 0 -3.25em 0 0 var(--hover);
    color: white !important;
  }

`

export default KopraTechnologies;
