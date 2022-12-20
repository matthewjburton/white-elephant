import random

#Responsible for controlling the main flow of the program
def main():
    header("introduction")
    header("settings")
    numberOfPlayers, numberOfSteals = settings()
    header("names")
    players = names(numberOfPlayers)
    header("order")
    turnOrder(players)
    header("steals")
    play(players, numberOfSteals)
    header("conclusion")

#The initial title and explaination of the program's purpose
def header(section):
    match section:
        case "introduction":
            print("\nWhite Elephant Tool")
            print("-------------------")
            print("This program will determine the turn order, and track how many times a gift has been stolen")
        case "settings":
            print("\nSettings")
            print("--------")
        case "names":
            print("\nNames")
            print("-----")
        case "order":
            print("\nTurn Order")
            print("----------")
        case "steals":
            print("\nStart")
            print("-----")
        case "conclusion":
            print("\nThanks for using the White Elephant Tool")
        case _:
            print("ERROR: invalid section")


#Allows the user to define the settings of the game, specifically the number of players and how many steals are allowed per gift
def settings():
    #set the number of payers from user input
    numberOfPlayers = int(input("How many people are playing? "))
    while (numberOfPlayers < 2):
        print("ERROR: Cannot play with less than two people.")
        numberOfPlayers = int(input("How many people are playing? "))

    #set the number of steals from user input
    numberOfSteals = int(input("How many times can a gift be stolen? "))
    while (numberOfSteals < 0):
        print("ERROR: Cannot steal less than zero times")
        numberOfSteals = int(input("How many times can a gift be stolen? "))
    
    #confirm that the settings are correct or change them
    response = ''
    while (response != 'y' and response != 'n'):
        response = input("\nProceed with these settings? y/n\nPlayers: " + str(numberOfPlayers) + "\nSteals: " + str(numberOfSteals) + "\n")
    if response == 'y':
        return numberOfPlayers, numberOfSteals
    elif response == 'n':
        settings()

#stores the list of names for all players participating in the gift exchange
def names(numberOfPlayers):
    print("Enter each player's name on a separate line")
    
    players = []
    for i in range(numberOfPlayers):
        name = input("Enter the name of player " + str(i + 1) + ": ")
        players.append(name)
    
    return players

#shuffles the order of the names in a random order
def turnOrder(players):
    for name in players:
        index = players.index(name)
        #picks a random index in the list to swap places with
        swapIndex = random.randrange(len(players))
        
        #swaps the current name with the swapIndex
        temp = name
        players[index] = players[swapIndex]
        players[swapIndex] = temp

    #prints the shuffled list to the user
    for name in players:
        print(str(players.index(name) +  1) + ". " + players[players.index(name)])

#controls the turns for each player and prompts the user with their options
def play(players, numberOfSteals):
    stealTracker = []
    for x in players:
        stealTracker.append(0)

    #controls each player's turn
    for name in players:
        print(name + ", it's your turn.")
        
        response = ''
        #all but the first player is given the option to steal a gift instead of opening one
        if players.index(name) > 0:
            #the user is prompted to decided whether they would like to steal or not
            while (response != 'y' and response != 'n'):
                response = input("Would you like to steal a gift? y/n\n")
            if response == 'y':
                #the list of players who have a gift are listed
                print("You can steal from:")
                i = 1
                for index in range(players.index(name)):
                    if (stealTracker[index] < numberOfSteals):
                        print(str(i) + ". " + players[index] + "'s gift can be stolen " + str(numberOfSteals - stealTracker[index]) + " more times")
                        i += 1
                #the user is prompted to select a target to steal from or to cancel and open a gift instead
                choice = 0
                while (choice < 1 or choice > len(players)):
                    choice = int(input("Enter the player's NUMBER you want to steal from or press ENTER to cancel and open a gift instead: "))
                if choice == '':
                    response = 'n'
                else:
                    stealTracker[players.index(name)] = stealTracker[choice - 1] + 1
                    stealTracker[choice - 1] = 0
        #player is prompted to open a gift
        if response != 'y':
            print("Open a gift.")
            input("press ENTER to continue")
        print("")

    #the first player goes again
    print(players[0] + ", it's the final turn.")
    response = ''
    while (response != 'y' and response != 'n'):
        response = input("\nWould you like to steal a gift? y/n\n")
    if response == 'y':
        #the list of players who have a gift are listed
        print("You can steal from:")
        i = 1
        for index in range(1, players.index(name)):
            if (stealTracker[index] < numberOfSteals):
                print(str(i) + ". " + players[index] + "'s gift can be stolen " + str(numberOfSteals - stealTracker[index]) + " more times")
                i += 1
        #the user is prompted to select a target to steal from or to cancel and open a gift instead
        choice = 0
        while (choice < 1 or choice > len(players)):
            choice = int(input("Enter the player's NUMBER you want to steal from or press ENTER to cancel and open a gift instead: "))
        if choice == '':
            response = 'n'
        else:
            stealTracker[players.index(name)] = stealTracker[choice - 1] + 1
            stealTracker[choice - 1] = 0
    elif response == 'n':
        return

if __name__ == "__main__":
    main()