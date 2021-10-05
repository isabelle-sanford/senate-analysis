# import modules + data
from plotly.subplots import make_subplots
import pandas as pd
import plotly.graph_objects as go

def bar(x, y, colors):
    trace1 = go.Bar(
        x=x,
        y=y,
        marker_color=colors)
    fig = go.Figure([trace1])
    
    return fig

data = pd.read_csv('./resources/SPopulation.csv')

    # set up what party gets what colors and transform party column in data into a corresponding list of colors
colordict = {'Republican': 'red', 'Democratic':'blue', 'Independent':'gray', 'Vacant':'purple'}
colors = [colordict[k] for k in list(data['Party'])]
data['color'] = colors

sorts = data.sort_values(by='Population').reset_index(drop=True)

# very simple graph showing how many people democrats vs republicans represent
mylabels = ['Republican', 'Democrat']

all_Rs = sorts[sorts['Party'] == 'Republican']['Population'].sum() / 2
all_Ds = sorts[sorts['Party'] != 'Republican']['Population'].sum() / 2 # dividing by 2 because 2 senators per state

party_bar = bar(mylabels, [all_Rs, all_Ds], ['red', 'blue'])

# @TODO: Include independents on top of democrats in a different color


# ----------------BAR STACK-----------------

stack_1 = sorts[sorts.index % 2 == 0]
stack_2 = sorts[sorts.index % 2 == 1]

# colors stuff, as above
# colors1 = [colordict[k] for k in list(stack_1['Party'])]
# colors2 = [colordict[k] for k in list(stack_2['Party'])]


# bottom half of bar chart
trace1 = go.Bar(
    x=list(stack_1['State']),
    y=list(stack_1['Population']/2), # divide state pop in two so two senators makes the right pop come out
    # But don't want hovering to SHOW this
    marker_color = stack_1['color'],
    text=list(stack_1['Senator'])) # hovering shows state

# top half, same thing
trace2 = go.Bar(
    x=list(stack_1['State']), # maybe do abbreviations? 
    y=list(stack_2['Population']/2),
    marker_color = stack_2['color'],
    hovertext=list(stack_2['Senator'])) 

# make chart!
pop_state_bar = go.Figure([trace1])
pop_state_bar.add_trace(trace2)

# add a line between 9 and 10 to show the halfway point
# @TODO: make robust against different distributions of population
pop_state_bar.add_vline(x=9.5, line_dash='dot')

pop_state_bar.update_layout(
    barmode='stack', 
    xaxis={'categoryorder':'total descending'}, 
    showlegend = False,
    title = "# of People each Senator Represents",
    template = 'plotly_white')

pop_bar = pop_state_bar

# -------------------------------------POLAR CHAMBER-----------------------------
# put coords in table?
rep_coords = [(r, a*90 / (r+2)) for a in range(12) for r in range(max(5, a-2),10)]
dem_coords = [(r, 180 - a*90 / (r+2)) for a in range(12) for r in range(max(5, a-2),10)]


Ds = sorts[sorts['Party'] != 'Republican']
Rs = sorts[sorts['Party'] == 'Republican']

# specifies two side-by-side subplots
pop_chamber = make_subplots(rows=1, cols=2, specs=[[{'type': 'polar'}]*2]*1, horizontal_spacing=0)


# democrat side
pop_chamber.add_trace(go.Scatterpolar(
    r = [a[0] for a in dem_coords],
    theta = [a[1] for a in dem_coords],
    text=list(Ds['Senator']),
    mode = 'markers',
    marker = dict(
        color = Ds['color'],
        size = list(Ds['Population']),
        sizemode = 'area',
        sizeref = 2.*40000000/(50.**2),
        sizemin = 4)
        ), 
        1, 1)

# republican side
pop_chamber.add_trace(go.Scatterpolar(
    r = [a[0] for a in rep_coords],
    theta = [a[1] for a in rep_coords],
    text = list(Rs['Senator']),
    mode = 'markers',
    marker = dict(
        color = Rs['color'],
        size = list(Rs['Population']),
        sizemode = 'area',
        sizeref = 2.*40000000/(50.**2),
        sizemin = 4)
    ), 
    1, 2)


pop_chamber.update_layout(
    title = "US Senate",
    font_size = 15,
    showlegend = False,
    polar = dict(
        sector = [90,180],
        bgcolor = "white",
        angularaxis = dict(showline=False,showticklabels=False, ticks=''),
        radialaxis = dict(showline=False, showticklabels=False, ticks='')
    ),
    polar2 = dict(
        sector = [0, 90],
        bgcolor = "white",
        angularaxis = dict(showline=False,showticklabels=False, ticks=''),
        radialaxis = dict(showline = False,showticklabels=False, ticks='')
    ),
    paper_bgcolor = "white"
)

chamber = pop_chamber