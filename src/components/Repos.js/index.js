import React, { useContext } from 'react';
import styled from 'styled-components';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './charts';


const Repos = () => {
  
  const { repos }  = useContext(GithubContext)
  
  let languages = repos.reduce(( total, item ) => {
    const { language , stargazers_count} = item

    if(!language) return total
    if(!total[language]){ total[language] =  {
      "label":language, "value":1, "star": stargazers_count,
    }}
    else { 
      total[language] = { "label": language, "value" :total[language].value+1, "star":total[language].star + stargazers_count,
    }}

    return total
  } , {})

  const mostUsed = Object.values(languages).sort((a, b) => b.value - a.value).slice(0, 5);

  const mostPopular = Object.values(languages).sort((a, b) => b.star - a.star).map(item => {return { "label":item.label, "value":item.star}}).slice(0, 5);

  let { stars, forks} = repos.reduce((total, item) => {
    const {stargazers_count, name, forks} = item;

    total.stars[stargazers_count] = {label: name, value: stargazers_count};
    total.forks[forks] = {label: name, value: forks};
    return total
  },
  {
    stars :{},
    forks :{},
  })

  stars = Object.values(stars).reverse().slice(0, 5);
  forks = Object.values(forks).reverse().slice(0, 5);

  // console.log(stars);
  return <section className="section">
    <Wrapper className="section-center">
      <Pie3D data={mostUsed} />
      <Column3D data = {stars}/>
      <Doughnut2D data = {mostPopular} />
      <Bar3D data={forks} />
    </Wrapper>
  </section>
  
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
