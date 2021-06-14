// class PersonNode {
//   constructor(name) {
//     this.name = name;
//     this.adjacent = [];
//   }
// }

// better to use a set to store adjacencies/edges

class PersonNode {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

class FriendGraph {
  constructor() {
    this.nodes = new Set();
  }
  addPerson(node) {
    this.nodes.add(node);
  }
  addPeople(peopleList) {
    for (let node of peopleList) {
      this.addPerson(node);
    }
  }
  setFriends(person1, person2) {
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }
  areConnectedBFS(person1, person2) {
    let toVisitQueue = [person1];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let currentPerson = toVisitQueue.shift();

      if (currentPerson === person2) return true;

      for (let neighbor of currentPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
  areConnectedDFS(person1, person2) {
    let toVisitStack = [person1];
    let seen = new Set(toVisitStack);
    while (toVisitStack.length) {
      let currentPerson = toVisitStack.pop();

      if (currentPerson === person2) return true;

      for (let neighbor of currentPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
}

const homer = new PersonNode("Homer");
const marge = new PersonNode("Marge");
const maggie = new PersonNode("Maggie");
const lisa = new PersonNode("Lisa");
const gramps = new PersonNode("Grampa");

const friends = new FriendGraph();
friends.addPerson([homer, marge, maggie, lisa, gramps]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);
friends.setFriends(lisa, maggie);
friends.setFriends(lisa, gramps);

const moe = new PersonNode("moe");
const barney = new PersonNode("barney");
const lenny = new PerssonNode("lenny");
friends.addPeople([moe, barney, lenny]);
friends.setFriends(mode, barney);
friends.setFriends(lenny, barney);
