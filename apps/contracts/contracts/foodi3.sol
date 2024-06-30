// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Foodi3 {
    // Structure to hold receipt details
    struct Receipt {
        address user;
        string receiptHash;
        uint256 timestamp;
        bool validated;
    }

    // Structure to hold user information
    struct User {
        uint256 submissionCount;
        uint256 rewardPoints;
    }

    // State variables
    address public admin;
    mapping(address => User) public users;
    Receipt[] public receipts;
    mapping(string => bool) public receiptHashes; // To prevent duplicate receipts

    // Events
    event ReceiptSubmitted(address indexed user, string receiptHash, uint256 timestamp);
    event ReceiptValidated(address indexed user, uint256 rewardPoints, uint256 timestamp);

    // Modifiers
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyValidReceipt(string memory receiptHash) {
        require(!receiptHashes[receiptHash], "Receipt already submitted");
        _;
    }

    // Constructor
    constructor() {
        admin = msg.sender;
    }

    // Function to submit a receipt
    function submitReceipt(string memory receiptHash) external onlyValidReceipt(receiptHash) {
        receipts.push(Receipt({
            user: msg.sender,
            receiptHash: receiptHash,
            timestamp: block.timestamp,
            validated: false
        }));

        receiptHashes[receiptHash] = true;
        users[msg.sender].submissionCount += 1;

        emit ReceiptSubmitted(msg.sender, receiptHash, block.timestamp);
    }

    // Function to validate a receipt (for admin)
    function validateReceipt(uint256 receiptIndex, uint256 rewardPoints) external onlyAdmin {
        require(receiptIndex < receipts.length, "Invalid receipt index");
        Receipt storage receipt = receipts[receiptIndex];
        require(!receipt.validated, "Receipt already validated");

        receipt.validated = true;
        users[receipt.user].rewardPoints += rewardPoints;

        emit ReceiptValidated(receipt.user, rewardPoints, block.timestamp);
    }

    // Function to get the total number of receipts
    function getReceiptCount() external view returns (uint256) {
        return receipts.length;
    }

    // Function to get user statistics
    function getUserStats(address user) external view returns (uint256 submissionCount, uint256 rewardPoints) {
        User storage userInfo = users[user];
        return (userInfo.submissionCount, userInfo.rewardPoints);
    }

    // Function to transfer admin rights
    function transferAdmin(address newAdmin) external onlyAdmin {
        require(newAdmin != address(0), "Invalid new admin address");
        admin = newAdmin;
    }
}
