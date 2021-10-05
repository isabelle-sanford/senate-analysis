import * as React from "react";

const crs = (
  <p>
    Congressional Research Service:{" "}
    <a href="https://crsreports.congress.gov/product/pdf/R/R46705">
      Membership of the 117th Congress: A Profile
    </a>
  </p>
);

const wglt = (
  <p>
    WGLT:{" "}
    <a href="https://www.wglt.org/post/us-senate-most-unrepresentative-body#stream/0">
      The US Senate: The Most Unrepresentative Body
    </a>
  </p>
);

const dataForProgress = (
  <p>
    Data For Progress:{" "}
    <a href="https://www.filesforprogress.org/memos/the-senate-is-an-irredeemable-institution.pdf">
      The Senate is an Irredeemable Institution
    </a>
  </p>
);

const five38 = (
  <p>
    FiveThirtyEight:{" "}
    <a href="https://fivethirtyeight.com/features/the-senate-has-always-favored-smaller-states-it-just-didnt-help-republicans-until-now/">
      The Senate Has Always Favored Smaller States. It Just Didn't Help
      Republicans Until Now.
    </a>
  </p>
);

const atlantic = (
  <p>
    The Atlantic:{" "}
    <a href="https://www.theatlantic.com/ideas/archive/2019/09/when-adding-new-states-helped-republicans/598243/">
      When Adding New States Helped The Republicans
    </a>
  </p>
);

const womenInCongress = (
  <p>
    Center for the Study of Democratic Institutions:{" "}
    <a href="https://www.vanderbilt.edu/csdi/research/files/CSDI-WP-04-2010.pdf">
      The Legislative Effectiveness of Women in Congress
    </a>
  </p>
);

// properly cited --------------

const womenInStateCongress = (
  <p>
    Thomas, Sue. "
    <a href="https://www.jstor.org/stable/2131862">
      The Impact of Women on State Legislative Policies
    </a>
    ." The Journal of Politics, vol. 53, no. 4, 1991, pp. 958–976. JSTOR,
    www.jstor.org/stable/2131862. Accessed 19 Apr. 2021.
  </p>
);

const legislativeDiversity = (
  <p>
    Bratton, Kathleen A.{" "}
    <a href="https://journals.sagepub.com/doi/pdf/10.1177/1532673X02030002001">
      The Effect of Legislative Diversity on Agenda Setting
    </a>
    . American Politics Research, vol. 30, no. 2, 2002, pp. 115-142. Accessed 19
    Apr. 2021.
  </p>
);

const congressionalDiversity = (
  <p>
    Minta, Michael D., and Valeria Sinclair-Chapman. "
    <a href="https://isabelle-sanford.github.io/senate-analysis/templates/www.jstor.org/stable/23563594">
      Diversity in Political Institutions and Congressional Responsiveness to
      Minority Interests
    </a>
    ." Political Research Quarterly, vol. 66, no. 1, 2013, pp. 127–140. JSTOR,
    www.jstor.org/stable/23563594. Accessed 19 Apr. 2021.
  </p>
);

const diversityInStateCongress = (
  <p>
    Rheingold, Beth. "
    <a href="https://scholars.org/sites/scholars/files/ssn_key_findings_reingold_on_legislative_diversity_2.pdf">
      THE UNEVEN PRESENCE OF WOMEN AND MINORITIES IN AMERICA’S STATE
      LEGISLATURES – AND WHY IT MATTERS
    </a>
    ." Scholars Strategy Network. Accessed Apr. 19 2021. (Possibly a summary or
    portion or preview of "Legislative Diversity," Guide to State Politics and
    Policy, Congressional Quarterly Press, 2013)
  </p>
);

const representationInCongress = (
  <p>
    Lowande, Kenneth et al. "
    <a href="https://drive.google.com/file/d/1hwXRjz9A3iQshtv0WqomF3T4SaXwiENb/view">
      Descriptive and Substantive Representation in Congress: Evidence from
      80,000 Congressional Inquiries
    </a>
    ." 2018. Accessed 19 Apr 2021.{" "}
    <a href="https://www.washingtonpost.com/news/monkey-cage/wp/2019/01/09/having-the-most-diverse-congress-ever-will-affect-more-than-just-legislation/">
      Washington Post summary here.
    </a>
  </p>
);

const minorityLegislators = (
  <p>
    Griffin, John D. "
    <a href="https://www.annualreviews.org/doi/full/10.1146/annurev-polisci-033011-205028#_i8">
      When and Why Minority Legislators Matter
    </a>
    ." Annual Review of Political Science, vol. 17, 2014, pp. 327-336. Annual
    Reviews. Accessed 19 Apr. 2021.
  </p>
);

// DATA

const pewReligion = (
  <p>
    Pew Research Forum:{" "}
    <a href="https://www.pewresearch.org/">Religion by State</a>
  </p>
);

const wikipediaSenate = (
  <p>
    Wikipedia:{" "}
    <a href="https://en.wikipedia.org/wiki/List_of_current_United_States_senators">
      117th Senate
    </a>
  </p>
);

const censusPop = (
  <a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-counties-total.html">
    Population Estimates 2010-2019
  </a>
);
const censusDemographics = (
  <a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-detail.html">
    Demographics by Age, Gender and Race 2010-2019
  </a>
);
const census1790 = (
  <a href="https://www2.census.gov/library/publications/decennial/1790/heads_of_families/connecticut/1790b-02.pdf">
    1790 Census
  </a>
);

const censusData = (
  <p>
    Census:
    <ul>
      <li>{censusPop}</li>
      <li>{censusDemographics}</li>
      <li>{census1790}</li>
    </ul>
  </p>
);

export const aboutMe = (
  <p>
    This site was originally made by Steven Brown, William Enriquez, Michelle
    Risucci, Isabelle Sanford, and Kosal Sieng, in the context of the USC
    Viterbi School of Engineering Data Analysis Boot Camp. It was later extended
    by Isabelle Sanford to its current form, through her Writing Workshop class
    at Bryn Mawr College. She is still working on the site, and is happy to talk
    about it with anyone who wants to. Thanks for stopping by! The site itself
    is made using the Bootstrap library for web design and Plotly.js to create
    the graphics.
    <br />
    Code:{" "}
    <a href="https://github.com/isabelle-sanford/senate-analysis.git">
      Github repository
    </a>
    <br />
    Contact: isabellesanford@gmail.com
  </p>
);

export const dataSources = [pewReligion, wikipediaSenate, censusData];

export const uncitedSources = [
  crs,
  wglt,
  dataForProgress,
  five38,
  atlantic,
  womenInCongress,
];

export const citedSources = [
  womenInStateCongress,
  legislativeDiversity,
  congressionalDiversity,
  diversityInStateCongress,
  representationInCongress,
  minorityLegislators,
];

export const censusSources = [censusPop, censusDemographics, census1790];
