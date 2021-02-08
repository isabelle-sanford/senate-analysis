senators_dict = {
'Alex Padilla, D' : 'California',
'Amy Klobuchar, DFL' : 'Minnesota',
'Angus King Jr., I' : 'Maine',
'Ben Cardin, D': 'Maryland',
'Ben Ray Lujan, D': 'New Mexico',
'Ben Sasse, R': 'Nebraska',
'Bernie Sanders, I': 'Vermont',
'Bill Cassid, R': 'Louisiana',
'Bill Hagerty, R': 'Tennessee',
'Bob Casey Jr., D': 'Pennsylvania',
'Bob Menendez, D': 'New Jersey',
'Brian Schatz, D': 'Hawaii',
'Catherine Cortez Masto, D': 'Nevada',
'Chris Coons, D': 'Delaware',
'Chris Murphy, D': 'Connecticut',
'Chris Van Hollen, D': 'Maryland',
'Chuck Grassley, R': 'Iowa',
'Chuck Schumer, D': 'New York',
'Cindy Hyde-Smith, R': 'Mississippi',
'Cory Booker, D': 'New Jersey',
'Cynthia Lummis, R': 'Wyoming',
'Dan Sullivan, R': 'Alaska',
'Deb Fischer, R': 'Nebraska',
'Debbie Stabenow, D': 'Michigan',
'Dianne Feinstein, D': 'California',
'Dick Durbin, D': 'Illinois',
'Ed Markey, D': 'Massachusetts',
'Elizabeth Warren, D': 'Massachusetts',
'Gary Peters, D': 'Michigan',
'Jack Reed, D': 'Rhode Island',
'Jacky Rosen, D': 'Nevada',
'James Lankford, R': 'Oklahoma',
'Jeanne Shaheen, D': 'New Hampshire',
'Jeff Merkley, D': 'Oregon',
'Jerry Moran, R': 'Kansas',
'Jim Inhofe, R': 'Oklahoma',
'Jim Risch, R': 'Idaho',
'Joe Manchin, D': 'West Virginia',
'John Barrasso, R': 'Wyoming',
'John Boozman, R': 'Arkansas',
'John Cornyn, R': 'Texas',
'John Hickenlooper, D': 'Colorado',
'John Hoeven, R': 'North Carolina',
'John Kennedy, R': 'Louisiana',
'Jon Ossoff, D': 'Georgia',
'Jon Tester, D': 'Montana',
'Joni Ernst, R': 'Iowa',
'Josh Hawley, R': 'Missouri',
'Kevin Cramer, R': 'North Dakota',
'Kirsten Gillibrand, D': 'New York',
'Kyrsten Sinema, D': 'Arizona',
'Lindsey Graham, R': 'South Carolina',
'Lisa Murkowski, R': 'Alaska',
'Maggie Hassan, D': 'New Hampshire',
'Marco Rubio, R': 'Florida',
'Maria Cantwell, D': 'Washington',
'Mark Kelly, D': 'Arizona',
'Marsha Blackburn, R': 'Tennessee',
'Martin Hienrich, D': 'New Mexico',
'Mazie Hirono, D': 'Hawaii',
'Michael Bennet, D': 'Colorado',
'Mike Braun, R': 'Indiana',
'Mike Crapo, R': 'Idaho',
'Mike Lee, R': 'Utah',
'Mitch McConnell, R': 'Kentucky',
'Mitt Romney, R': 'Utah',
'Pat Toomey, R': 'Pennsylvania',
'Patrick Leahy, D': 'Vermont',
'Patty Murray, D': 'Washington',
'Raphael Warnock, D': 'Georgia',
'Richard Blumenthal, D': 'Connecticut',
'Richard Burr, R': 'North Carolina',
'Richard Shelby, R': 'Alabama',
'Rick Scott, R': 'Florida',
'Rnad Paul, R': 'Kentucky',
'Rod Wyden, R': 'Ohio',
'Rodger Marshall, R': 'Kansas',
'Roger Wicker, R': 'Mississippi',
'Ron Johnson, R': 'Wisconsin',
'Ron Wyden, D': 'Oregon',
'Roy Blunt, R': 'Missouri',
'Sheldon Whitehouse, D': 'Rhode Island',
'Shelly Moore Capito, R': 'West Virginia',
'Sherrod Brown, D': 'Ohio',
'Steve Daines, R': 'Montana',
'Susan Collins, R': 'Maine',
'Tammy Baldwin, D': 'Wisconsin',
'Tammy Duckworth, D': 'Illinois',
'Ted Cruz, R': 'Texas',
'Thom Tillis, R': 'North Carolina',
'Tim Scott, R': 'South Carolina',
'Tina Smith, DFL': 'Minnesota',
'Todd Young, R': 'Indiana',
'Tom Carper, D': 'Delaware',
'Tom Cotton, R': 'Arkansas',
'Tommy Tuberville, R': 'Alabama',
}

import random

senators = list(senators_dict.keys())
for i in [1, 2, 3, 4, 5]:
    senator = random.choice(senators)
    senator1 = random.choice(senators)
    senator2 = random.choice(senators)
    state = senators_dict[senator]
    state1 = senators_dict[senator1]
    state2 = senators_dict[senator2]
    state_guess_list = [state, state1, state2]
    y = random.randint(1,3)

    if y == 1:
        print("")
        print("Chose from: " + state_guess_list[0]+ " " + state_guess_list[1] + " " + state_guess_list[2])
    elif y == 2:
        print("")
        print("Chose from: " + state_guess_list[1]+ " " + state_guess_list[2] + " " + state_guess_list[0])
    else:
        print("")
        print("Chose from: " + state_guess_list[2]+ " " + state_guess_list[0] + " " + state_guess_list[1])
    
    print("")
    state_guess = input("What State does " + senator + " represent? ")
    
    if state_guess == state:
        print("Correct! Nice job.")
    else:
        print("Incorrect. The state " + senator + "represents is " + state + ".")
        
print("All done")
    
    