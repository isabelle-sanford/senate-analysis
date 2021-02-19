import pandas as pd

data = pd.read_csv('../resources/ReligiousAffiliationByState.csv')  # NOTE: has to be two dots because it's being run in a notebook
# if running directly in a py file just use one dot

#print(data.head())

data0 = data.replace(to_replace = ['<1', '< 1', '<16', ',', '<!', '<1<1'], value = '0') # regex for 'includes <'?
# data1 = data0.replace(to_replace = '< 1', value = '0')
# data1 = data1.replace(to_replace = '<16', value = '0') # fix in original sheet
data1 = data0.fillna(value='0')

relig_list = data1.columns
new_cols = list(range(55))
data1.columns = new_cols


relig_dict = {}

for n in range(1,55):
    try:
        us_perc = round(sum([int(d) for d in list(data1[n])]) / 51, 2)
        relig_dict[relig_list[n]] = us_perc
    except:
        print(f"Problem in column {n}")

print(relig_dict)