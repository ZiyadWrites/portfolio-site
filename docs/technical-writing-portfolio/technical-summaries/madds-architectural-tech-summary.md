---
sidebar_position: 3
---

# Technical Summary

:::info

This document provides a technical summary of an architectural drawing I developed for a job application. The assignment required a concise summary, limited to one page. To maintain confidentiality, the drawing itself has been omitted to protect the client's information.

:::

## Master Delivery Dataset (MADDS) architecture
The Master Delivery Dataset (MADDS) processes, transforms and stores advertising delivery data and metadata from multiple sources. It follows a structured data pipeline with five key stages: Sources, Extraction, Transformation, Loading and Querying.


## 1. Sources
The system collects data from two main source categories:
- Event sources (Ad servers): DFP Delivery, Haymaker Delivery, Adswizz Delivery
- Metadata Sources: Slingshot Order and Taxonomy 

## 2. Extraction
The Extraction layer retrieves data from the Event and Metadata sources for further processing.

## 3. Transformation
The system runs daily transformation jobs to clean, structure and enrich the data, ensuring the latest information is available for analysis.

## 4. Loading
The standardized data is processed and stored in the HDFS (Hadoop distributed file system), where it becomes part of the data warehouse.

## 5. Querying
The data warehouse supports querying using Spark, Hive, MapReduce and Presto for analytics and reporting.
