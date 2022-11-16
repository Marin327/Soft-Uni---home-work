function solve() {
    journal = [n for n in input().split(", ")]
    command = input()
     
    while not command == "Craft!":
        command = command.split(" - ")
        action = command[0]
        item = command[1]
        if action == "Collect":
            if item not in journal:
                journal.append(item)
            else:
                command = input()
                continue
        elif action == "Drop":
            if item in journal:
                journal.remove(item)
            else:
                command = input()
                continue
        elif action == "Renew":
            if item in journal:
                journal.remove(item)
                journal.append(item)
            else:
                command = input()
                continue
        elif action == "Combine Items":
            item_split = item.split(":")
            indexing_old_item = journal.index(item_split[0])
            if item_split[0] in journal:
                journal.insert(indexing_old_item + 1, item_split[1])
        command = input()
     
    final_result = ', '.join(str(x) for x in journal)
    print(final_result)
     

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])