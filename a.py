f = open("input.txt", "r")
string = f.read()
f.close()
string = string.replace("1 point","")
arr = string.split("\n")
while "" in arr:
	arr.remove("")
alphabet = ["a","b","c","d","e","f"]
resutl = arr.pop(0)
for index, option in enumerate(arr, start=0):
	resutl += "\n" + alphabet[index] + ". " + option
f = open("output.txt", "w")
f.write(resutl)
f.close()
