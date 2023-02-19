
void main() {
  LinkedList ll=LinkedList();
  ll.printNodes();
  ll.insertAtBeginning('1');
  ll.insertAtBeginning('2');
  ll.insertAtEnd('3');
  ll.printNodes();
}

class Node {
  String data = '';
  Node? next;
  Node(String value) {
    data = value;
    next=null;
  }
}

class LinkedList {
  Node? head;
  Node? tail;
  LinkedList() {
    head = null;
    tail = null;
  }
  void insertNodeAtBeginning(Node node) {
    if (head == null) {
      head = node;
      tail = node;
    } else {
      node.next = head;
      head = node;
    }
  }

  void insertAtBeginning(String data) {
    Node node = Node(data);
    if (tail != null) {
      node.next = head;
      head = node;
    } else {
      tail=node;
      head=node;
    }
  }

  void insertAtEnd(String data) {
    Node node = Node(data);
    if (tail == null) {
      head = node;
      tail = node;
    } else {
      tail?.next = node;
      tail = node;
    }
  }

  void insertNodeAtEnd(Node node) {
    if (tail != null) {
      tail?.next = node;
      tail = node;
      node.next = null;
    } else {
      head = node;
      tail = node;
    }
  }

  void printNodes() {
    Node? iterator = head;
    print("[");
    while (iterator != null) {
      print(iterator.data);
      iterator = iterator.next;
    }
    print("]");
  }
}

