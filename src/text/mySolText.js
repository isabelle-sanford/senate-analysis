import * as React from "react";

export const solIntro = (
  <p>
    In this proposal, I will advocate for the Senate Reform Act proposed by
    Professor Eric Orts, combined with the pro-majoritarian filibuster from
    Gould et al.
  </p>
);

export const explainSRA = (
  <p>
    The mathematics of the Orts proposition work as follows.
    <br />
    First, get our “unit” number by dividing the population by 100. (This could
    be another number; 100 just results in about 100 Senate seats like we have
    now, and the math is easy to do.) Using the recently released 2020 census
    data, our unit is 3,307,597 people. Next, divide every state’s population by
    this number, to get the ratio between the unit and the state population.
    <br />
    Using these numbers, we assign Senate seats. Any number with less than one
    unit gets 1 seat. Beyond one unit, we round normally: states with a ratio of
    X.5 or above get X+1, states below X.5 get X. The results:
    <br />
    <ul>
      <li>1 seat - 26 states</li>
      <li>2 seats - 12 states</li>
      <li>3 seats - 5 states</li>
      <li>4 seats - 3 states</li>
      <li>6 seats - New York</li>
      <li>7 seats - Florida</li>
      <li>9 seats - Texas</li>
      <li>12 seats - California</li>
    </ul>
    The end result is 111 senators from the 50 states. These seats would be
    updated with the decennial census like the House already does.
    <br /> Problems Remain: This is more proportional, but some states still
    have much more per-voter power than others. In general, the very smallest
    states still have the most disproportionate advantage, but after that it is
    at least somewhat more random.
  </p>
);

export const explainPMFilibuster = (
  <p>
    Democratizing the Senate from Within suggests a change to the cloture rules
    so that debate can be closed by, instead of 60 senators, a majority of the
    population. This “nukes the filibuster” insofar as only 50 senators are now
    needed for cloture, but it requires a popular majority in addition to this
    senate majority. For instance, this would mean that in the current system
    the 25 smallest states could not collectively call for a bill to be voted
    on, even though they comprise 50 senators, because those senators only
    represent approximately 15% of the U.S. population.
  </p>
);

export const whatItMeans = (
  <p>
    The SRA doesn’t result in perfect representation. The senator from Wyoming
    still only represents 576 thousand people, while the Louisiana senator
    represents 4.7 million. But at least this ratio is now 8 to 1, as opposed to
    the current 67 to 1.
    <br />
    [comparison graph!]
    <br />
    More equal representation makes a difference, too. Two senators do not have
    as much power, time, or influence as 12, and we see that reflected in the
    current political system: per capita, many small states receive much more
    federal funding than large states. [other examples?]
    <br />
    In addition to more representation, this gives interesting choices for the
    larger states to elect their senators differently. States could hold senate
    elections with Ranked Choice Voting, which would likely result in much
    purpler states in the Senate race. So not only is there more even
    representation, but also more chance for people in big states to be
    represented by a senator of their party.
    <br />
    A few other interesting repercussions follow from this act. For instance,
    it’s probable that new states would have an easier route to statehood, as
    one senator is easier to stomach than 2 for the party less likely to gain
    that seat.
    <br />
    This is potentially much better than removing the filibuster entirely,
    because it guards against the problem of minority rule – nuking the
    filibuster is good in that it gives the majority party more power and the
    minority party has less of a stranglehold, but that’s only more democratic
    if the majority party actually represents the popular majority. In the
    current situation of disproportionate small-state representation favoring
    the Republicans, this is not guaranteed. In fact, the Republican party has
    held a Senate majority in 12 of the last 20 years but has never represented
    more than half of the U.S. population in that time.
    <br />
    Problems remain: The “fix” here is that it makes representation unequal in
    both directions: the advantage of large states is that the votes of their
    senators are very valuable, but the small states are still disproportionally
    represented and needed for the Senate majority. This is certainly fairer
    than the current system, but balancing inequality with inequality is not an
    ideal solution.
  </p>
);

export const constitutionality = (
  <p>
    Orts argues, thoroughly, that his proposal is constitutional. As he is a law
    professor and I am decidedly not, I have left that argument to him, but you
    may read it
    <a href="https://search.proquest.com/pqrl/docview/2281098739/1843BBEEEB00414FPQ/1?accountid=9772">
      here
    </a>{" "}
    (pp. 2010-y). For the purposes of this page/paper, we assume that the Senate
    Reform Act is constitutionally viable.
    <br />
    Filibuster reform is indisputably constitutionally viable. It would only
    require a change in Senate rules, which is something that the Constitution
    explicitly leaves entirely to the Senate, and is little different than any
    other change to the filibuster in recent times (e.g. when it was removed for
    the purposes of judicial confirmations).
  </p>
);

export const feasibilitySRA = (
  <p>
    The Senate Reform Act is a non-partisan suggestion and does not clearly
    benefit either party. It likely is slightly more attractive to Democrats,
    because it corrects for{" "}
    <a href="https://fivethirtyeight.com/features/the-senate-has-always-favored-smaller-states-it-just-didnt-help-republicans-until-now/">
      small state bias towards republicans
    </a>
    , but it has its own advantages for the GOP. Splitting bigger states into
    several senators allows Republicans to compete in big blue states like
    California that they currently have no chance in.
    <br />
    That said, this particular formulation of the SRA is directly harmful to the
    interests of the 26 states which would all lose a senator. This is likely
    the largest political obstacle to the Act, and Orts suggests a Rule of Two
    Hundred might be more palatable, using 2 senators as a floor rather than
    one.
  </p>
);

export const feasibilityFilibuster = (
  <p>
    In the short term, the pro-majoritarian cloture rule benefits Democrats. It
    is in fact even more to the Democrats’ advantage than simply removing the
    filibuster, because at present a minority of people live in red states, so
    the Republican party is unlikely to have both a popular and a Senate
    majority. However, it also may appeal to moderate Democrats, since it is
    explicitly fairer and more representative of the people.
    <br />
    The place where this could get Republican support is if it were combined
    with the Senate Reform Act, actually. Republicans in Congress currently
    represent a minority of the population specifically because larger states
    tend to be blue, but if those states get more senators and turned purple,
    that problem goes away.
  </p>
);
