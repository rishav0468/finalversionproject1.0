import React, { useState, useEffect } from "react";
import "./tree.css";

function generateRandomTree(level, usedValues = []) {
  if (level === 0) {
    return null;
  }

  let value;
  do {
    value = Math.floor(Math.random() * 100);
  } while (usedValues.includes(value));

  usedValues.push(value);
  let active = false;
  const lvl = level;
  const left = generateRandomTree(level - 1, usedValues);
  const right = generateRandomTree(level - 1, usedValues);

  return {
    value,
    left,
    right,
    active,
    lvl
  };
}

function Binarytree() {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [traversalType, setTraversalType] = useState("inorder");
  const [treeLevel, setTreeLevel] = useState(3);
  const [tree, setTree] = useState(generateRandomTree(treeLevel));
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const traverseTree = (node) => {
    setVisitedNodes([]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const traverseHelper = async (node) => {
      if (node) {
        if (traversalType === "inorder") {
          await traverseHelper(node.left);
          await delay(animationSpeed * 500);
          setVisitedNodes((visitedNodes) => [...visitedNodes, node.value]);
          await traverseHelper(node.right);
        } else if (traversalType === "preorder") {
          setVisitedNodes((visitedNodes) => [...visitedNodes, node.value]);
          await delay(animationSpeed * 500);
          await traverseHelper(node.left);
          await traverseHelper(node.right);
        } else if (traversalType === "postorder") {
          await traverseHelper(node.left);
          await traverseHelper(node.right);
          await delay(animationSpeed * 500);
          setVisitedNodes((visitedNodes) => [...visitedNodes, node.value]);
        }
      }
    };

    traverseHelper(node);
  };

  useEffect(() => {
    setTree(generateRandomTree(treeLevel));
  }, [treeLevel]);

  const renderTree = (node) => {
    if (!node) {
      return null;
    }

    const isVisited = visitedNodes.includes(node.value);

    return (
      <div className="node">
        <div
          className="value"
          style={{ backgroundColor: isVisited ? "#51CB64" : "white" }}
        >
          {node.value}
        </div>
        {node.lvl !== 1 && (
          <div
            className="edge"
            style={{ backgroundColor: isVisited ? "#51CB64" : "white" }}
          >
            <div className="edge-left">
              <svg
                className="edge-left-line"
                width="50%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  vector-effect="non-scaling-stroke"
                  stroke="white"
                  strokeWidth="2px"
                />
              </svg>
            </div>
            <div className="edge-right">
              <svg
                width="50%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  vector-effect="non-scaling-stroke"
                  stroke="white"
                  strokeWidth="2px"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="children">
          {renderTree(node.left)}
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <div className="tree-body">
      <div className="app">
        <div className="header">
          <div className="title-container">
            <a href="/">
              <h1 className="title">Algorithm Visualizer</h1>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="left-container">
            <div className="tree">{renderTree(tree)}</div>
          </div>
          <div className="right-container">
            <div className="visited-title">Visited nodes:</div>
            <div className="visited">
              {visitedNodes.map((node) => (
                <div key={node} className="visited-node">
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="controls">
          <select
            class="levelcontrol"
            value={traversalType}
            onChange={(e) => setTraversalType(e.target.value)}
          >
            <option value="inorder">Inorder</option>
            <option value="preorder">Preorder</option>
            <option value="postorder">Postorder</option>
          </select>

          <input
            type="number"
            class="levelcontrol"
            value={treeLevel}
            min="1"
            max="5"
            onChange={(e) => setTreeLevel(parseInt(e.target.value))}
          />

          <select
            class="levelcontrol"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
          >
            <option value="1">3x</option>
            <option value="2">2x</option>
            <option value="3">1x</option>
          </select>
          <button onClick={() => traverseTree(tree)}>Start traversal</button>
        </div>
      </div>
    </div>
  );
}

export default Binarytree;
