import * as React from "react";
import { Link } from "gatsby";

export const introPara = (
  <>
    <p>
      The U.S. Senate is the least representative body of its kind in the world.
      [source, source, source] If it were a senate for a particular state,{" "}
      <a href="https://www.wglt.org/illinois/2021-02-09/the-u-s-senate-the-most-unrepresentative-body#stream/0">
        the Supreme Court would strike it down as unconstitutional
      </a>
      . I go over the Senate’s problems in detail{" "}
      <Link to="/">on this page</Link>, so I will only briefly summarize them
      here. The senate is:
      <ul>
        <li>Unrepresentative of diversity by race/gender/religion/etc</li>
        <li>
          Unrepresentative of the US population by party (which has been growing
          worse in recent years)
        </li>
        <li>
          Unequally representative of citizens; a vote in Wyoming is 67 times
          more important than one in California
        </li>
        <li>
          Most states have become reliably only one party, which results in
          fewer resources spent there for campaigns and in Congress
        </li>
        <li>
          Smaller states get more funding per capita than big states reliably
          because of that small state bias
        </li>
        <li>campaign stuff idk</li>
      </ul>
    </p>
    <p>
      <h3>HISTORY</h3>
      The Senate was created in 1787 at the first and only Constitutional
      Convention. It is a result of one of the two major compromises made there,
      sharing that dubious distinction with the now-removed{" "}
      <a href="https://en.wikipedia.org/wiki/Three-fifths_Compromise">
        3/5ths Compromise
      </a>
      . Smaller states threatened to walk out of the convention if they were not
      given equal representation, and the{" "}
      <a href="https://en.wikipedia.org/wiki/Connecticut_Compromise">
        Connecticut Compromise
      </a>{" "}
      resulted in the Senate giving states equal representation while the House
      gives representation by population. This was more palatable at the time
      that it is now, with the largest state being only about ten times the size
      of the smallest (it’s now 68 to 1) but even then several of the Founding
      Fathers were deeply unhappy with it, with James Madison calling it the
      "lesser evil" in{" "}
      <a href="https://teachingamericanhistory.org/document/federalist-no-62/">
        Federalist No. 62
      </a>
      .
    </p>
    <p>
      <h3>SUMMARY</h3>
      The Senate has unique advice and consent power to ratify treaties, declare
      war, and confirm Cabinet Secretaries, Supreme Court Justices, federal
      judges, and other officials. It also conducts impeachment trials and, of
      course, makes law.
    </p>
  </>
);

export const fixesIntro = (
  <p>
    This part lays out several solutions in turn for proposed ways to fix the
    senate, in approximate order of current political feasibility. Note that
    most solutions are not mutually exclusive with each other. The summaries are
    short, but this is a reasonably comprehensive list of suggested options.{" "}
  </p>
);

export const statehoodFix = (
  <p>
    <strong>DESCRIPTION</strong>: Admit Puerto Rico and Washington D.C. to the
    Union. This is currently popular, and mainly helps diversify the Senate and
    correct for overrepresentation of white people (DC is idk 60% black, PR is
    98% Hispanic).
    <br />
    <strong>Proponents</strong>: Lots of people, idk
    <br />
    <strong>Feasibility</strong>: Very! Might be a bill in Congress rn? Good
    chance for happening in the next couple years What it fixes: A small amount
    of the lack of representation, particularly for racial diversity, plus their
    own taxation without representation stuff
    <br />
    <strong>Partisanship</strong>: Clearly benefits the Democrats, particularly
    DC, which is some ridiculous percent blue. That’s why it’s popular right now
    <br />
    <strong>Read more</strong>:{" "}
    <a href="https://www.usatoday.com/story/news/politics/2021/04/14/what-know-bills-congress-washington-dc-puerto-rico-statehood/7211653002/">
      USA Today
    </a>
    <br />
  </p>
);

export const filibusterIntro = (
  <p>
    The filibuster is a controversial procedural rule in the Senate.
    Essentially, to close debate and vote on a bill, 60 senators must vote for
    ‘cloture’. This effectively sets the bar for passing legislation at 60, even
    though bills themselves only require a simple majority. The filibuster was
    an accident of history. It was the inadvertent result of [small changes to
    the Senate rules], only discovered [decades later], and has most notably
    been used to [prevent civil rights legislation]. Importantly, it can be
    removed or modified at any time by a simple majority. The Senate sets its
    own rules, and in fact there are already a few{" "}
    <a href="http://dx.doi.org/10.1080/07343469.2018.1558674">
      exceptions to the filibuster
    </a>
    .
  </p>
);

export const filibusterMakeTalk = (
  <p>
    <strong>DESCRIPTION</strong>: Alter the filibuster so that it is not an
    automatic process and require senators to waste time talking to prevent
    cloture. This makes it more painful to use, less likely to be used on small
    bills, and importantly Joe Manchin and Kyrsten Sinema have expressed some
    interest in the notion.
    <br />
    <strong>Proponents</strong>:
    <br />
    <strong>Feasibility</strong>: Only requires 50 Democratic senators on board
    <br />
    <strong>What It Fixes</strong>: Some of the current inefficiency; minority
    stranglehold on politics
    <br />
    <strong>Partisanship</strong>: Currently favors Democrats; equal in the
    longer term
    <br />
    <strong>Read more</strong>:<br />
  </p>
);

export const filibusterNuke = (
  <p>
    <strong>DESCRIPTION</strong>: Remove the filibuster altogether.
    <br />
    <strong>Proponents</strong>:
    <br />
    <strong>Feasibility</strong>: Requires 50 senators’ votes
    <br />
    <strong>What It Fixes</strong>: Inefficiency, minority stranglehold
    <br />
    <strong>Partisanship</strong>: same as above
    <br />
    <strong>Read more</strong>:<br />
  </p>
);

export const filibusterProMajoritarian = (
  <p>
    This proposal is the most interesting and least well-known around dealing
    with the filibuster. It is covered in much greater detail in the next
    section, but in summary.
  </p>
);

export const reformIntro = (
  <p>
    Some of the Senate’s problems result from how we run our elections. There
    are a lot of proposed reforms in this area, so this is not comprehensive.
  </p>
);

export const HR1 = (
  <p>
    HR1, the{" "}
    <a href="https://www.congress.gov/bill/117th-congress/senate-bill/1/text">
      For the People Act of 2021
    </a>
    , is an omnibus voting and campaign finance reform bill. It has already
    passed the House, and is currently stalled in the Senate. An overview:
    <ul>
      <li>
        Election integrity – gerrymandering ban, protections for minority and
        disenfranchised communities
      </li>
      <li>
        Voting access/rights – modernize registration, expand vote by mail,
        restore felon voting rights
      </li>
      <li>
        Campaign finance reporting – protect against foreign influence, increase
        transparency in ads and donations
      </li>
    </ul>
  </p>
);

export const reformOther = (
  <p>
    For an overview of a bunch of different reforms in this area, try{" "}
    <a href="https://www.cambridge.org/core/books/economic-realities-of-political-reform/4B15DB66F8C5F2921487B325AC7B068F#fndtn-contents">
      Economic Realities of Political Reform
    </a>
    . Although somewhat dated, in 1976 the Senate released a{" "}
    <a href="https://www.senate.gov/artandhistory/history/minute/Senate_reform_commission.htm">
      report
    </a>{" "}
    with very detailed recommendations. A few more radical reforms in this area:
    <ul>
      <li>
        Elect Senators with{" "}
        <a href="https://ballotpedia.org/Ranked-choice_voting_(RCV)">
          Ranked Choice Voting
        </a>
      </li>
      <li>Publicly fund elections</li>
    </ul>
  </p>
);

export const reallocateSeats = (
  <p>
    There are a few ideas for reallocating Senate seats or changing the makeup
    of the Senate to make it more representative and democratic. One of those is
    [covered in detail below], but others include:
    <ul>
      <li>
        Add 100 senators allocated using{" "}
        <a href="https://en.wikipedia.org/wiki/Mixed-member_proportional_representation">
          MMP
        </a>{" "}
        voting. (This is somewhat similar to the Senate Reform Act below, but
        MMP voting is a whole extra layer of interesting and complicated.)
      </li>
      <li>Feasibility: constitutional amendment/convention</li>
      <li>
        [find source] Keep the seats themselves exactly the same, but change
        voting rules in the Senate such that each senator’s vote counts for as
        many ‘points’ as there are people in their state, and passing a bill
        requires getting the support of over half the total points/population
      </li>
      <li>
        Feasibility: only requires changing senate rules! so on a practical
        level not bad, just convince a majority to do it
      </li>
    </ul>
  </p>
);

export const redrawMap = (
  <p>
    An alternative way to make Senate seats more representative would be to
    alter current state lines in some way to be more evenly distributed in
    population.
  </p>
);

export const divideCombine = (
  <p>
    <strong>DESCRIPTION</strong>: Burt Neuborne suggests dividing states. [Five
    states] have been created and admitted to the Union in that way, and the
    process is the same (except the pre-division state legislature must
    consent). Congress could allow any state above a certain population (maybe
    20x the smallest state) to divide into two separate states.
    <br />
    Kristin Eberhard proposes combining states as well as dividing them. There
    are 21 states which each comprise less than 1% of the national population,
    many of which are adjacent. Allowing them to combine would increase their
    House representation, population, and power compared to the other states.
    <br />
    <strong>Proponents</strong>: Professor Neuborne, Kristin Eberhard
    <br />
    <strong>Feasibility</strong>: Would only require an act of Congress (no
    amendment) and would be decided state-by-state, meaning the whole nation
    would not have to agree
    <br />
    <strong>What It Fixes</strong>:
    <br />
    <strong>Partisanship</strong>: Neutral, probably
    <br />
    <strong>Read more</strong>:{" "}
    <a href="https://www.wsj.com/articles/divide-states-to-democratize-the-senate-1542672828">
      Neuborne WSJ Opinion Piece
    </a>
    ,{" "}
    <a href="https://thefulcrum.us/congress/redrawing-state-lines">
      Eberhard in the Fulcrum
    </a>
    <br />
  </p>
);

export const redrawEverything = (
  <p>
    <strong>DESCRIPTION</strong>: Going even further, we could redraw the entire
    map. There have been
    <a href="https://www.mentalfloss.com/article/57444/map-only-38-states">
      a number
    </a>
    [of different] [maps] proposed over the years, but the general ideas are to
    create states which are more equally sized or more representative of
    cultural and economic boundaries. Plenty of states have extremely distinct
    sub-areas: eastern Oregon, for instance,
    <a href="https://www.nytimes.com/2021/05/21/us/oregon-idaho-secession.html">
      is trying
    </a>{" "}
    to become part of Idaho.
    <br />
    <strong>Proponents</strong>:
    <br />
    <strong>Feasibility</strong>:
    <br />
    <strong>What It Fixes</strong>:
    <br />
    <strong>Partisanship</strong>:
    <br />
    <strong>Read more</strong>: Neuborne WSJ OpEd, Book
    <br />
  </p>
);

export const abolishSenate = (
  <p>
    <strong>DESCRIPTION</strong>: Remove the Senate entirely. This is the most
    extreme and most difficult option but it would certainly fix the Senate’s
    problems. Former Representative John Dingell{" "}
    <a href="https://www.theatlantic.com/ideas/archive/2018/12/john-dingell-how-restore-faith-government/577222/">
      suggested
    </a>{" "}
    combining the two chambers of Congress into one. Other options include
    simple abolition or replacement with a citizen’s veto.
    <br />
    <strong>Proponents</strong>: John Dingell, ??
    <br />
    <strong>Feasibility</strong>: Would require a constitutional (article V)
    convention, which would be the first since 178?.
    <br />
    <strong>What It Fixes</strong>: Everything, maybe! It’s a chance for a clean
    slate
    <br />
    <strong>Partisanship</strong>: Favors Democrats, because the GOP is{" "}
    <a href="https://fivethirtyeight.com/features/the-congressional-map-is-historically-biased-toward-the-gop/">
      consistently overrepresented
    </a>{" "}
    in the Senate
    <br />
    <strong>Read more</strong>: Atlantic article, memoir
    <br />
  </p>
);

// export const HR1 = (
//   <p>
//     <strong>DESCRIPTION</strong>:
//     <br />
//     <strong>Proponents</strong>:
//     <br />
//     <strong>Feasibility</strong>:
//     <br />
//     <strong>What It Fixes</strong>:
//     <br />
//     <strong>Partisanship</strong>:
//     <br />
//     <strong>Read more</strong>:<br />
//   </p>
// );
