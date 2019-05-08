import React from "react";

import { Container, Repository } from "./styles";

const CompareList = ({ repositorios }) => (
  <Container>
    {repositorios.map(
      ({
        owner,
        name,
        stargazers_count,
        forks_count,
        open_issues_count,
        pushed_at
      }) => (
        <Repository>
          <header>
            <img src={owner.avatar_url} alt={owner.login} />
            <strong> {name} </strong>
            <small> {owner.login}</small>
          </header>

          <ul>
            <li>
              {stargazers_count} <small>stars</small>
            </li>
            <li>
              {forks_count} <small>forks</small>
            </li>
            <li>
              {open_issues_count} <small>issues</small>
            </li>
            <li>
              {pushed_at} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      )
    )}
  </Container>
);

export default CompareList;
