import * as algos from './algo';

// After adding the export in algos/index.js, add new algorithms in the following format:
// AlgorithmName: ['Menu Display Name', algos.ClassName, hasPseudoCode, 'Verbose Display Name (optional)']
export const algoMap = {
	NonLinearProbing: ['Non-Linear Probing', algos.NonLinearProbing],
	LVA: ['LVA', algos.LVA],
	BogoSort: ['Bogo Sort', algos.BogoSort],
	ArrayList: ['ArrayList', algos.ArrayList, true],
	LinkedList: ['Singly LinkedList', algos.LinkedList, true],
	DoublyLinkedList: ['Doubly LinkedList', algos.DoublyLinkedList, true],
	CircularlyLinkedList: ['Circularly LinkedList', algos.CircularlyLinkedList, true],
	StackArray: ['Stack (Array)', algos.StackArray, true],
	StackLL: ['Stack (LinkedList)', algos.StackLL, true],
	QueueArray: ['Queue (Array)', algos.QueueArray, true],
	QueueLL: ['Queue (LinkedList)', algos.QueueLL, true],
	DequeArray: ['Deque (Array)', algos.DequeArray, true],
	DequeLL: ['Deque (LinkedList)', algos.DequeLL],
	BST: ['Binary Search Tree', algos.BST, true],
	Heap: ['Heap (PriorityQueue)', algos.Heap],
	SkipList: ['SkipList', algos.SkipList],
	OpenHash: ['HashMap (Probing)', algos.OpenHash],
	ClosedHash: ['HashMap (Chaining)', algos.ClosedHash],
	SplayTree: ['SplayTree', algos.SplayTree],
	AVL: ['AVL', algos.AVL],
	BTree: ['2-4 Tree', algos.BTree],
	BubbleSort: ['Bubble Sort', algos.BubbleSort, true],
	CocktailSort: ['Cocktail Shaker Sort', algos.CocktailSort, true],
	InsertionSort: ['Insertion Sort', algos.InsertionSort, true],
	SelectionSort: ['Selection Sort', algos.SelectionSort, true],
	Quicksort: ['Quicksort', algos.Quicksort, true],
	Quickselect: ['Quick Select (kᵗʰ Select)', algos.Quickselect, true],
	MergeSort: ['MergeSort', algos.MergeSort, true],
	LSDRadix: ['LSD Radix Sort', algos.LSDRadix, true],
	HeapSort: ['HeapSort', algos.HeapSort, true],
	BruteForce: ['Brute Force', algos.BruteForce, true],
	BoyerMoore: ['Boyer-Moore', algos.BoyerMoore, true],
	KMP: ['KMP', algos.KMP, true],
	RabinKarp: ['Rabin-Karp', algos.RabinKarp, true],
	CreateGraph: ['Create Graph', algos.CreateGraph, true],
	BFS: ['Breadth-First Search', algos.BFS, true],
	DFS: ['Depth-First Search', algos.DFS, true],
	Dijkstra: ["Dijkstra's", algos.Dijkstras, true],
	Prim: ["Prim's", algos.Prims, true],
	Kruskal: ["Kruskal's", algos.Kruskals, true],
	LCS: ['LCS', algos.LCS, true, 'Longest Common Subsequence'],
	Floyd: ['Floyd-Warshall', algos.Floyd],
};

export const algoList = [
	'Lists',
	'ArrayList',
	'LinkedList',
	'DoublyLinkedList',
	'CircularlyLinkedList',
	'Stacks, Queues and Deques',
	'StackArray',
	'StackLL',
	'QueueArray',
	'QueueLL',
	'DequeArray',
	'DequeLL',
	'Trees and SkipList',
	'BST',
	'Heap',
	'AVL',
	// 'LVA',
	'BTree',
	'SplayTree',
	'SkipList',
	'HashMaps',
	'ClosedHash',
	'OpenHash',
	// 'NonLinearProbing',
	'Sorting and Quickselect',
	// 'BogoSort',
	'BubbleSort',
	'CocktailSort',
	'InsertionSort',
	'SelectionSort',
	'Quicksort',
	'Quickselect',
	'MergeSort',
	'LSDRadix',
	'HeapSort',
	'String Searching',
	'BruteForce',
	'BoyerMoore',
	'KMP',
	'RabinKarp',
	'Graph Algorithms',
	'CreateGraph',
	'BFS',
	'DFS',
	'Dijkstra',
	'Prim',
	'Kruskal',
	'Dynamic Programming',
	'LCS',
	'Floyd',
];

export const relatedSearches = {
	ArrayList: ['LinkedList', 'StackArray', 'QueueArray', 'DequeArray'],
	LinkedList: [
		'ArrayList',
		'DoublyLinkedList',
		'CircularlyLinkedList',
		'StackLL',
		'QueueLL',
		'DequeLL',
	],
	DoublyLinkedList: ['LinkedList', 'CircularlyLinkedList', 'StackLL', 'QueueLL', 'DequeLL'],
	CircularlyLinkedList: ['LinkedList', 'DoublyLinkedList', 'StackLL', 'QueueLL', 'DequeLL'],
	StackArray: ['StackLL', 'QueueArray', 'DequeArray', 'ArrayList'],
	StackLL: [
		'StackArray',
		'QueueLL',
		'DequeLL',
		'LinkedList',
		'DoublyLinkedList',
		'CircularlyLinkedList',
	],
	QueueArray: ['QueueLL', 'StackArray', 'DequeArray', 'ArrayList'],
	QueueLL: [
		'QueueArray',
		'StackLL',
		'DequeLL',
		'LinkedList',
		'DoublyLinkedList',
		'CircularlyLinkedList',
	],
	DequeArray: ['DequeLL', 'StackArray', 'QueueArray', 'ArrayList'],
	DequeLL: [
		'DequeArray',
		'StackLL',
		'QueueLL',
		'LinkedList',
		'DoublyLinkedList',
		'CircularlyLinkedList',
	],
	BST: ['AVL', 'Heap', 'SplayTree', 'SkipList', 'BTree'],
	Heap: ['BST', 'AVL', 'SplayTree', 'BTree', 'HeapSort'],
	SkipList: ['BST', 'AVL', 'BTree'],
	OpenHash: ['ClosedHash'],
	ClosedHash: ['OpenHash'],
	SplayTree: ['BST', 'AVL', 'Heap'],
	AVL: ['BST', 'Heap', 'SplayTree'],
	BTree: ['BST', 'Heap', 'SkipList'],
	BubbleSort: ['InsertionSort', 'SelectionSort', 'CocktailSort'],
	CocktailSort: ['BubbleSort', 'InsertionSort', 'SelectionSort'],
	InsertionSort: ['BubbleSort', 'SelectionSort', 'CocktailSort'],
	SelectionSort: ['BubbleSort', 'InsertionSort', 'CocktailSort'],
	Quicksort: ['MergeSort', 'Quickselect', 'HeapSort'],
	Quickselect: ['Quicksort'],
	MergeSort: ['Quicksort', 'HeapSort'],
	LSDRadix: ['HeapSort', 'MergeSort'],
	HeapSort: ['MergeSort', 'Quicksort', 'LSDRadix', 'Heap'],
	BruteForce: ['BoyerMoore', 'KMP', 'RabinKarp'],
	BoyerMoore: ['BruteForce', 'KMP', 'RabinKarp'],
	KMP: ['BruteForce', 'BoyerMoore', 'RabinKarp'],
	RabinKarp: ['BruteForce', 'BoyerMoore', 'KMP'],
	BFS: ['DFS', 'Dijkstra', 'Prim', 'Kruskal'],
	DFS: ['BFS', 'Dijkstra', 'Prim', 'Kruskal'],
	Dijkstra: ['BFS', 'DFS', 'Prim', 'Kruskal'],
	Prim: ['BFS', 'DFS', 'Dijkstra', 'Kruskal'],
	Kruskal: ['BFS', 'DFS', 'Dijkstra', 'Prim'],
	LCS: ['Floyd'],
	Floyd: ['LCS'],
};

export const algoFilter = [
	{
		id: 'ArrayList',
		category: 'Lists',
	},
	{
		id: 'LinkedList',
		category: 'Lists',
	},
	{
		id: 'DoublyLinkedList',
		category: 'Lists',
	},
	{
		id: 'CircularlyLinkedList',
		category: 'Lists',
	},
	{
		id: 'StackArray',
		category: 'Linear Data Structures',
	},
	{
		id: 'StackLL',
		category: 'Linear Data Structures',
	},
	{
		id: 'QueueArray',
		category: 'Linear Data Structures',
	},
	{
		id: 'QueueLL',
		category: 'Linear Data Structures',
	},
	{
		id: 'DequeArray',
		category: 'Linear Data Structures',
	},
	{
		id: 'DequeLL',
		category: 'Linear Data Structures',
	},
	{
		id: 'BST',
		category: 'Trees and SkipList',
	},
	{
		id: 'Heap',
		category: 'Trees and SkipList',
	},
	{
		id: 'AVL',
		category: 'Trees and SkipList',
	},
	{
		id: 'BTree',
		category: 'Trees and SkipList',
	},
	{
		id: 'SplayTree',
		category: 'Trees and SkipList',
	},
	{
		id: 'SkipList',
		category: 'Trees and SkipList',
	},
	{
		id: 'OpenHash',
		category: 'Hashmaps',
	},
	{
		id: 'ClosedHash',
		category: 'Hashmaps',
	},
	{
		id: 'BubbleSort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'CocktailSort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'InsertionSort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'Quicksort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'Quickselect',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'MergeSort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'LSDRadix',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'HeapSort',
		category: 'Sorting and Quick Select',
	},
	{
		id: 'BruteForce',
		category: 'Pattern Matching',
	},
	{
		id: 'BoyerMoore',
		category: 'Pattern Matching',
	},
	{
		id: 'KMP',
		category: 'Pattern Matching',
	},
	{
		id: 'RabinKarp',
		category: 'Pattern Matching',
	},
	{
		id: 'BFS',
		category: 'Graph Algorithms',
	},
	{
		id: 'DFS',
		category: 'Graph Algorithms',
	},
	{
		id: 'Dijkstra',
		category: 'Graph Algorithms',
	},
	{
		id: 'Prim',
		category: 'Graph Algorithms',
	},
	{
		id: 'Kruskal',
		category: 'Graph Algorithms',
	},
	{
		id: 'LCS',
		category: 'Dynamic Programming',
	},
	{
		id: 'Floyd',
		category: 'Dynamic Programming',
	},
];