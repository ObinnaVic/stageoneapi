const express = require("express");
const DETAILS = require("../model/details.model")

const detailsController = (req, res) => {
    if(req.method == "GET") {
        return res.status(200).json(DETAILS);
    }

    return res.status(404).json({
        error: "Page Not Found"
    });
}

module.exports = {detailsController};